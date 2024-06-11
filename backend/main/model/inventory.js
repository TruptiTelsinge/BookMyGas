const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    agency_id: Schema.Types.ObjectId,
    cylinder_type: String,
    quantity_available: Number,
    last_updated: Date
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
