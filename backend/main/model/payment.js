const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  booking_id: Schema.Types.ObjectId,
  payment_date: Date,
  amount: Number,
  payment_method: String,
  payment_status: String
});
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
