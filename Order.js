const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String},
  price:String,
  address:String,
  pin:String,
  phone:String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;