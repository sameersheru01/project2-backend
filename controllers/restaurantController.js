const User = require('../models/userModel')
const Cart = require('../models/cartmodel');
const Restaurant = require('../models/restaurantModel')

exports.data = async(req,res)=>{
    const { name } = req.params;
    // console.log(name)
    try {
      const restaurant = await Restaurant.findOne({ name });
      console.log(name)
      
      if (restaurant) {
        return res.json(restaurant);
      } else {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.getAllRestaurants = async (req, res) => {
    try {
      // Fetch all restaurants from the database
      const restaurants = await Restaurant.find(); // No filter to fetch all
  
      if (restaurants.length > 0) {
        return res.json(restaurants); // Return all restaurants as JSON
      } else {
        return res.status(404).json({ message: 'No restaurants found' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };

// exports.addtocart = async(req,res)=>{
//     const { name } = req.params;
//     // console.log(name)
//     try {
//         const userid = req.user.id;
//         const user = await User.findById(userid);
//         const existingItem = user.cart.find(item => item.productId.toString() === productId);
//         if (existingItem) {
//             // Update the quantity if the product already exists
//             existingItem.quantity += quantity;
//         } else {
//             // Add a new product to the cart
//             user.cart.push({ quantity, price, title });
//         }
//         await user.save();
//         console.log('Cart updated:', user.cart);
//     } catch (error) {
//         console.error('Error adding to cart:', error.message);0
//     }
// };
// const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    const { name, description ,cost,imgurl } = req.body;
    const userId = req.user.id;
    // const userId = 0;
    // console.log({ name, description ,cost })
    console.log(userId) 

    try {
        // Find the user's cart
        let cart = await Cart.findOne({ userId:userId });

        if (!cart) {
            // If no cart exists, create a new one
            cart = new Cart({
                userId,
                items: [{ name, description ,cost,imgurl }],
            });
        } else {
            // Check if the item already exists in the cart
            const existingItemIndex = cart.items.findIndex(item => item.name === name);

            if (existingItemIndex >= 0) {
                // Update the quantity if the item exists
                cart.items[existingItemIndex].quantity += 1;
            } else {
                // Add the new item to the cart
                cart.items.push({ name, description ,cost,imgurl });
            }
        }

        await cart.save();
        return res.status(200).json({ message: 'Item added to cart', cart });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.viewCart = async (req, res) => {
    const cartId  = req.params.id;

    console.log(cartId)
    try {
        const cart = await Cart.findById( cartId )

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        return res.status(200).json({ cart });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
exports.viewCartbyId = async (req, res) => {
    const userid = req.user.id;

    try {
        const cart = await Cart.findOne({ userId: userid });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Update cost for each item in the cart based on quantity
        cart.items.forEach(item => {
            // Update cost for each item based on quantity
            item.cost = item.cost * item.quantity;
        });

        // Calculate the total cost of the entire cart
        const totalCost = cart.items.reduce((total, item) => {
            return total + item.cost; // Sum the updated costs of each item
        }, 0);

        // Return cart data along with total cost
        return res.status(200).json({ cart, totalCost });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
};



exports.removeFromCart = async (req, res) => {
    const { userId, name } = req.body;

    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(402).json({ message: 'Cart not found' });
        }

        // Find the item in the cart
        const itemIndex = cart.items.findIndex(item => item.name === name);

        if (itemIndex === -1) {
            return res.status(403).json({ message: 'Item not found in cart' });
        }

        // Check if the item quantity is more than 1
        if (cart.items[itemIndex].quantity > 1) {
            // Reduce the quantity by 1
            cart.items[itemIndex].quantity -= 1;
        } else {
            // If quantity is 1, remove the item from the cart
            cart.items.splice(itemIndex, 1);
        }

        // Save the updated cart
        await cart.save();

        // Recalculate total cost by summing the cost * quantity for each item
        const totalCost = cart.items.reduce((total, item) => {
            return total + (item.cost * item.quantity); // Calculate based on updated quantity
        }, 0);

        return res.status(200).json({ message: 'Item updated in cart', cart, totalCost });
    } catch (error) {
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.alladdress = async(req,res)=>{
    const userId = req.user.id;
    console.log(userId)
    try {
        const user = await User.findById(userId, 'addresses');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ addresses: user.addresses });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.addaddress = async(req,res)=>{
    const userId = req.user.id;
    const { state, city, pincode, phonenumber, fulladdress } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Add the new address to the addresses array
        user.addresses.push({ state, city, pincode, phonenumber, fulladdress });

        // Save the updated user document
        await user.save();

        return res.status(200).json({
            message: 'Address added successfully',
            name: user.name,
            addresses: user.addresses,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
}




