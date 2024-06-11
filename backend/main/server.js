const express = require('express');
const app = express()
const cors = require('cors');
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const agencyRoutes = require('./routes/agency');
const staffRoutes = require('./routes/staff');
const gasConnectionRoutes = require('./routes/connection');
const bookingRoutes = require('./routes/booking');
const inventoryRoutes = require('./routes/inventory');
const paymentRoutes = require('./routes/payment');
const feedbackRoutes = require('./routes/feedback');

app.use(bodyParser.json());


// Middleware Connections
app.use(cors())
app.use(express.json())

connectDB()

app.use('/user', userRoutes);
app.use('/agency', agencyRoutes);
app.use('/staff', staffRoutes);
app.use('/connection', gasConnectionRoutes);
app.use('/booking', bookingRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/payment', paymentRoutes);
app.use('/feedback', feedbackRoutes);

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
}) 