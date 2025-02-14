const express = require("express");
const User = require("../models/User");
const Question = require("../models/Question");
const Answer = require("../models/Answer");

const router = express.Router();

router.post("/uploadanswer", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    const { questionId, username, answer } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    const role = user.role;

    const question = await Question.findById(questionId);
    if (!question) {
        return res.status(404).json({ success: false, message: 'Question not found' });
    }

    await Answer.create({ questionId, username: user.username, role, answer });
    console.log(username, role, answer);
    return res.status(200).send({ success: true, username,question, answer, role });
});

router.get("/getanswers/:questionId", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://cc-test-p3mt.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    const { questionId } = req.params;

    const question = await Question.findById(questionId);
    if (!question) {
        return res.status(404).json({ success: false, message: 'Question not found' });
    }

    const answers = await Answer.find({ questionId });
    if(!answers){
        return res.status(404).json({success:false,message: 'No anwers found'});
    }

    return res.status(200).send({ success: true, question, answers });
});

module.exports = router;
