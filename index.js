import express from 'express';
import mongoose from 'mongoose';
// import './Utils/UploadQuestion.js'
import cors from 'cors';
import 'dotenv/config';
import './Db/connectdb.js';
import authrouter from './Routes/AuthRoutes.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken'; // Ensure you import jwt if you use it
import User from './Models/Users.js';
import router from './Routes/QuizRoutes.js';
import './cronjobs.js'
import GetQuestion from './Routes/GetQuestions.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser()); 
app.use(cors({
  origin: ['http://localhost:5173', 'https://cypher-quiz-frontend.vercel.app'],
  credentials: true, // This is necessary if you're using cookies
}));



// Define routes
app.use('/auth', authrouter);
app.use(router)
app.use(GetQuestion)

app.get('/api/auth/check', async (req, res) => {
    // Retrieve the token from the Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from the header
    console.log(token);

    try {
        const verified = jwt.verify(token, 'SecretKey123');
        console.log(verified);
        
        // Assuming you store user information in the token or fetch from the database
        const user = await User.findById(verified._id);
        
        return res.status(200).json({ user });
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
});




app.get('/', (req, res) => {
    console.log('Hello World');
    res.send("dfhdh");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
