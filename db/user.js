var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  unique_id: String,
  email: String,
  register_date: { type: Date, default: Date.now },
  membership: {
    year: Number,
    status: {
      month: String,
      terms: Number,
      full_month: Boolean
    }
  }
});

module.exports = mongoose.model('User', userSchema);
