const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');
const restaurantController = require('../controllers/restaurantController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile',authMiddleware,usercontroller.profile)
router.get('/restaurants/:name',restaurantController.data)
router.get('/alladdress',authMiddleware,restaurantController.alladdress)
router.post('/addaddress',authMiddleware,restaurantController.addaddress)
router.get('/restaurants',restaurantController.getAllRestaurants),
router.get('/viewcartbyid',authMiddleware,restaurantController.viewCartbyId)
router.post('/addtocart',authMiddleware,restaurantController.addToCart)
router.get('/viewcart/:id',restaurantController.viewCart)
router.delete('/removefromcart',restaurantController.removeFromCart)


module.exports = router;