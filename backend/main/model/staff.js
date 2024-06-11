const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String,
    agency_id: Schema.Types.ObjectId
});

const Staff = mongoose.model('Staff', staffSchema)

module.exports = Staff
