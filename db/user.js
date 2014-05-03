var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  unique_id: String,
  email: String,
  phone: String,
  register_date: { type: Date, default: Date.now },
  membership: {
    year: Number,
    month: String,
    status: {
      full_month: Boolean,
      terms_remaining: Number,
    }
  }
});

module.exports = mongoose.model('User', userSchema);
