const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gasConnectionSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  connection_type: String,
  agency_id: Schema.Types.ObjectId,
  connection_date: Date
});
const GasConnection = mongoose.model('GasConnectionSchema', gasConnectionSchema);
module.exports = GasConnection;
