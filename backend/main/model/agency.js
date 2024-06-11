const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agencySchema = new Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    manager_id: Schema.Types.ObjectId
});
const Agency = mongoose.model('Agency', agencySchema);

module.exports = Agency;
