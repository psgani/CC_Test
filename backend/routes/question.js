const express = require("express");
const User = require("../models/User");
const Question = require("../models/Question");
const router = express.Router();

router.post("/uploadquestion",async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    const {username, question} = req.body;

    const user = await User.findOne({ username }); 
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
    const role = user.role; 

    await Question.create({username:user.username,question,role})
    console.log(username,role,question);
    return res.status(200).send({success:true,username,question,role})
})

router.get("/getquestions",async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    const output = await Question.find()
    return res.status(200).send({output})
})



module.exports = router