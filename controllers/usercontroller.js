const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const {loginSchema,registerSchema}= require('../config/zod')

exports.login= async(req,res)=>{
    try {
        const validatedata = loginSchema.parse(req.body)
        const {email,password}=validatedata;
        let user = await User.findOne({ email });
        if (!user) {
        return res.status(400).json({ error: {email: 'User not exists'} });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: {password: 'Invalid Password'} });
        }
        const token = jwt.sign({user: { id: user._id,email: user.email }}, process.env.KEY, { expiresIn: '7d' });
        
        res.status(200).json({token});
        
    } catch (error) {
        if (error.errors) {
            const formattedErrors = error.errors.reduce((acc, err) => {
                acc[err.path[0]] = err.message;
                
                return acc;
            }, {});
            
            console.log(error.errors);
            return res.status(400).json({ error: formattedErrors });
        }
        res.status(500).send('Server error');
    }
}


exports.register= async(req,res)=>{
    try {
        const validatedata = registerSchema.parse(req.body)
        const {name,email,phonenumber,password}=validatedata;
        let user = await User.findOne({ email });
        if (user) {
        return res.status(400).json({ error: {email: 'User already exists'} });
        }
        let salt =await bcrypt.genSalt(10);
        let hashedpassword = await bcrypt.hash(password,salt);
        user = new User({ name, email , phonenumber , password:hashedpassword });
        await user.save();
        // console.log(email,password);
        res.json("successfully register")
        
    } catch (error) {
        if (error.errors) {
            const formattedErrors = error.errors.reduce((acc, err) => {
                acc[err.path[0]] = err.message;
                
                return acc;
            }, {});
            
            console.log(error.errors);
            return res.status(400).json({ error: formattedErrors });
        }
        res.status(500).send('Server error');
    }
}

exports.profile = async(req,res)=>{
    try {
        const userid = req.user.id;
        const user = await User.findById(userid).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.json(error)
    }
}

exports.getCards = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const user = await User.findById(userId).select('cards'); // Fetch user by ID and return only the cards
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.json({ cards: user.cards });
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };

  // PATCH /user/:userId/cards/:cardId
exports.updateCard = async (req, res) => {
    const { userId, cardId } = req.params;
    const { cardnumber, expiration, cvv, holdername } = req.body;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const cardIndex = user.cards.findIndex(card => card._id.toString() === cardId);
      if (cardIndex === -1) {
        return res.status(404).json({ message: 'Card not found' });
      }
  
      // Update card information
      user.cards[cardIndex] = { ...user.cards[cardIndex], cardnumber, expiration, cvv, holdername };
      await user.save();
  
      return res.json({ message: 'Card updated', card: user.cards[cardIndex] });
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };

// DELETE /user/:userId/cards/:cardId
exports.deleteCard = async (req, res) => {
    const { userId, cardId } = req.params;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const cardIndex = user.cards.findIndex(card => card._id.toString() === cardId);
      if (cardIndex === -1) {
        return res.status(404).json({ message: 'Card not found' });
      }
  
      // Remove card from the user's cards array
      user.cards.splice(cardIndex, 1);
      await user.save();
  
      return res.json({ message: 'Card deleted' });
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };

  // POST /user/:userId/cards
exports.createCard = async (req, res) => {
    const { userId } = req.params;
    const { cardnumber, expiration, cvv, holdername } = req.body;
  
    try {
      // Find the user by userId
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isDuplicate = user.cards.some(card => card.cardnumber === cardnumber);

    if (isDuplicate) {
      return res.status(400).json({ message: 'Card with this number already exists' });
    }
  
      // Add the new card to the user's cards array
      user.cards.push({
        cardnumber,
        expiration,
        cvv,
        holdername,
      });
  
      // Save the updated user document
      await user.save();
  
      return res.status(201).json({ message: 'Card added successfully', card: user.cards[user.cards.length - 1] });
    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };


