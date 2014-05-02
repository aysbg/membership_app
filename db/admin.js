var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var adminSchema = new Schema({
    name: String,
    password: String,
    email: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admin', adminSchema);
