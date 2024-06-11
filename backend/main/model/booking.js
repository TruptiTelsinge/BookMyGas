const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  gas_connection_id: Schema.Types.ObjectId,
  agency_id: Schema.Types.ObjectId,
  booking_date: Date,
  status: String,
  payment_status: String
});
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
