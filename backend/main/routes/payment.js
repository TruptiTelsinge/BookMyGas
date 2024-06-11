const express = require('express');
const router = express.Router();
const Payment = require('../model/payment');

// Payment creation route
router.post('/', async (req, res) => {
    try {
        const payment = new Payment(req.body);
        await payment.save();
        res.status(201).send(payment);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all payments route
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find();
        res.send(payments);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add more routes for other payment operations as needed

module.exports = router;
