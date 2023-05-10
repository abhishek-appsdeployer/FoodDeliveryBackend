const mongoose = require('mongoose');

const breakfastSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  price: String,
  image:String,
});

const Breakfast = mongoose.model('Breakfast', breakfastSchema);

module.exports = Breakfast;