const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URL}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,  // Enable SSL
            tlsAllowInvalidCertificates: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;