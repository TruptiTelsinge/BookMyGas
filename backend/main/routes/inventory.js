const express = require('express');
const router = express.Router();
const Inventory = require('../model/inventory');

// Inventory creation route
router.post('/', async (req, res) => {
    try {
        const inventory = new Inventory(req.body);
        await inventory.save();
        res.status(201).send(inventory);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all inventory items route
router.get('/', async (req, res) => {
    try {
        const inventory = await Inventory.find();
        res.send(inventory);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add more routes for other inventory operations as needed

module.exports = router;
