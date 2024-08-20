import User from "../../Models/Users.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ _id: user._id }, 'SecretKey123', {
        expiresIn: '12h'
    });

    res.cookie('token', token, {
      httpOnly: false,
      same_site: 'none',
      secure: true,
      maxAge: 90 * 24 * 60 * 60 * 1000,
    });
  


    res.status(200).json({
        message: "Login successful",
        token: token,
        user :{
            _id: user._id,
            name: user.name,
            email: user.email,
        }
    })


  } catch (error) {
    next(error);
  }
};

export default Login;
