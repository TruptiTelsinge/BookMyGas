const express = require('express')
const router = express.Router()
const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../config/authMiddleWare')
const utils = require('../utils')

router.post('/register', async (req, res) => {
    try {
        console.log(req.body)
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            ...req.body,
            password: hashedPassword
        });
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

// User login route
router.post('/login', async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ email: req.body.email, role : req.body.role });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.send(utils.createErrorResult('Invalid login credentials'))
        }

        const token = jwt.sign({ id: user._id, role: user.role, name : user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const userData = {user, token}
        res.send(utils.createSuccessResult(userData))
    } catch (err) {
        res.status(400).send(err);
    }
});

// Protected route example
router.get('/me', authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.send(user);
});

router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

module.exports = router;
