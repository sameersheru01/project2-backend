const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login',usercontroller.login)
router.get('/register',usercontroller.register)
router.get('/profile',authMiddleware,usercontroller.profile)
router.get('/:userId/cards',usercontroller.getCards)
router.post('/:userId/cards',usercontroller.createCard)
router.patch('/:userId/cards/:cardId',authMiddleware,usercontroller.updateCard)
router.delete('/:userId/cards/:cardId',usercontroller.deleteCard)


module.exports = router;