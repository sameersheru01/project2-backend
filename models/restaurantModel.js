const mongoose = require('mongoose');

// Define the Menu Item schema
const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number, required: true },
  imgurl: { type: String, required: true },
});

// Define the Category schema
const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [menuItemSchema],
});

// Define the Address schema
const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
});

// Define the Restaurant schema
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  address: addressSchema,
  cuisine: { type: String, required: true },
  rating: { type: Number, required: true },
  menu: [categorySchema],
});

// Create the Restaurant model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
