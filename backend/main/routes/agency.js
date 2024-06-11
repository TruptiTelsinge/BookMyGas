const express = require('express');
const router = express.Router();
const Agency = require('../model/agency');

// Agency registration route
router.post('/', async (req, res) => {
    try {
        const agency = new Agency(req.body);
        await agency.save();
        res.status(201).send(agency);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all agencies route
router.get('/', async (req, res) => {
    try {
        const agencies = await Agency.find();
        res.send(agencies);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add more routes for other agency operations as needed

module.exports = router;
