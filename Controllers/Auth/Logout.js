import express from 'express';


const Logout = (req, res) => {

    console.log("i am here");
    
  // Clear the JWT token from the cookies
  sessionStorage.removeItem('token');

  res.status(200).json({
    message: "Logout successful",
  });
};


export default Logout;
