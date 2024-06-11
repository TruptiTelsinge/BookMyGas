const express = require('express');
const router = express.Router();
const Booking = require('../model/booking');

// Booking creation route
router.post('/', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all bookings route
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.send(bookings);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Add more routes for other booking operations as needed

module.exports = router;
