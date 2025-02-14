const express = require("express");

const Blog = require("../models/Blog");
const router = express.Router();

router.post("/uploadblog",async(req,res)=>{
    try{
        res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.header("Access-Control-Allow-Credentials", "true");
        const {username, blog} = req.body;
        console.log(username,blog);
        await Blog.create({username,blog})
        return res.status(200).send({success:true,username,blog})
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
    
})

router.get("/getblogs",async(req,res)=>{
    try { 
        res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        res.header("Access-Control-Allow-Credentials", "true");
        const output = await Blog.find()
        return res.status(200).send({output})
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
})

module.exports = router;
