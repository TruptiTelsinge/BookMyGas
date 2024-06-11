const express = require('express');
const router = express.Router();
const Staff = require('../model/staff');

// Staff registration route
router.post('/', async (req, res) => {
    try {
        const staff = new Staff(req.body);
        await staff.save();
        res.status(201).send(staff);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all staff members route
router.get('/', async (req, res) => {
    try {
        const staffMembers = await Staff.find();
        res.send(staffMembers);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add more routes for other staff operations as needed

module.exports = router;
