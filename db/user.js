var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  unique_id: String,
  email: String,
  register_date: { type: Date, default: Date.now },
  membership: {
    month: String,
    year: Number,
    status: String
  }
});

module.exports = mongoose.model('User', userSchema);
