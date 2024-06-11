const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    phone: String,
    role: String,
    order_history: [Schema.Types.ObjectId]
});

const User =  mongoose.model('User', userSchema);

module.exports = User