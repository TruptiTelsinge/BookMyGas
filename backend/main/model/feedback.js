const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    agency_id: Schema.Types.ObjectId,
    feedback_text: String,
    rating: Number,
    feedback_date: Date
});
const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
