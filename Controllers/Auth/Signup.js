import createerror from '../../Utils/appError.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../Models/Users.js';

const Signup = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                status: 'error',
                message: 'Email already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword
        });

        const token = jwt.sign({ _id: newUser._id }, 'SecretKey123', {
            expiresIn: '90d'
        });

        res.cookie('token', token, {
            httpOnly: false,
            sameSite: 'Strict',
            maxAge: 90 * 24 * 60 * 60 * 1000, // 90 days
          });

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token: token
        });

    } catch (error) {
        next(error);
    }
};

export default Signup;
