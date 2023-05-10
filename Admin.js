const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});

const Admin = mongoose.model('Admin', userSchema);

module.exports = Admin;