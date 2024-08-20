import express from 'express';


const Logout = (req, res) => {

    console.log("i am here");
    
  // Clear the JWT token from the cookies
  res.clearCookie('token', {
    httpOnly: false,
    sameSite: 'Strict'
  });

  res.status(200).json({
    message: "Logout successful",
  });
};


export default Logout;
