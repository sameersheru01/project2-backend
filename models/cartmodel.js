const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgurl: { type: String, required: true },
    cost: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
    // userId: { type: Number, required: true }, 
    items: [cartItemSchema], // Array of cart items
});

module.exports = mongoose.model('Cart', cartSchema);
