const express = require('express');
const router = express.Router();
const GasConnection = require('../model/gasConnection');

// Gas connection creation route
router.post('/', async (req, res) => {
    try {
        const gasConnection = new GasConnection(req.body);
        await gasConnection.save();
        res.status(201).send(gasConnection);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all gas connections route
router.get('/', async (req, res) => {
    try {
        const gasConnections = await GasConnection.find();
        res.send(gasConnections);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add more routes for other gas connection operations as needed

module.exports = router;
