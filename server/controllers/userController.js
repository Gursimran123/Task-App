const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

const jwtSecret = process.env.SECRET

//Register a new user
const register = async(req,res)=>{
    const { name,email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({ message: "User already exists" });
        }
        //password encryption
        let salt= await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password,salt);

        let newUser = new User({
            name,
            email,
            password:hashedPassword
        })

        await newUser.save();
        res.status(200).json({message:"User registered successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

//User Login
const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
         if (!user) {
           return res.status(400).json({ message: "Invalid credentials" });
         }

         // Validate password
         const isMatch = await bcrypt.compare(password, user.password);

         if (!isMatch) {
           return res.status(400).json({ message: "Invalid credentials" });
         }

         // Generate JWT token
         const payload = {
           user: {
             id: user.id,
           },
         };

         jwt.sign(payload, jwtSecret, { expiresIn: "5h" }, (err, token) => {
           if (err) throw err;
           res.status(200).json({ token });
         });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {register,login};