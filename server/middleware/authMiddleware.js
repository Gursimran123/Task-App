const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config();

const verifyToken = async (req,res,next)=>{
  //Get token from request header
  const token = req.header("token");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "The token is not valid" });
  }

  try {
    const decoded = jwt.verify(token,process.env.SECRET);
    req.user= decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
}

module.exports = verifyToken