const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();
const Question = require('../models/Question'); 
const Answer = require('../models/Answer');
const User = require('../models/User');




router.get("/questioncount", async(req,res)=>{
    try {
        res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
        const count = await Question.countDocuments();
        res.json({ count });
      } catch (error) {
        console.error('Error retrieving question count:', error);
        res.status(500).json({ error: 'Failed to retrieve question count' });
      }
})

router.get("/answerscount", async(req,res)=>{
    try{
        res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
        const counta=await Answer.countDocuments();
        res.json({counta});
    }catch(error){
        console.error('Error retrieving answers count:', error);
        res.status(500).json({ error: 'Failed to retrieve answer count' });
    }
})

router.get("/blogscount", async(req,res)=>{
    try{
        res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
        const countb = await Blog.countDocuments();
        res.json({countb});
    }
    catch(error){
        console.error('Error in retrieving blogs count',error);
        res.status(500),json({error: 'Failed to retrieve blog count'});
    }
})

router.get("/userscount", async(req,res)=>{
    try{
        res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
        const countu = await User.countDocuments();
        res.json({countu});
    }
    catch(error){
        console.error('Error in retrieving users count',error);
        res.status(500),json({error: 'Failed to retrieve users count'});
    }
})

module.exports = router;