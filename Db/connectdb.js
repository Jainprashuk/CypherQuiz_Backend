import mongoose, { Mongoose } from "mongoose";

mongoose.connect(process.env.MONGOURL).then(()=>{
    console.log('Connected to MongoDB')
}).catch((Error)=>{
    console.log('Error connecting to MongoDB', Error)
})