const express = require('express');
const router = express.Router();
const Feedback = require('../model/feedback');

// Feedback creation route
router.post('/', async (req, res) => {
    try {
        const feedback = new Feedback(req.body);
        await feedback.save();
        res.status(201).send(feedback);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all feedbacks route
router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.send(feedbacks);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add more routes for other feedback operations as needed

module.exports = router;
