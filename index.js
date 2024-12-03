const express = require('express');
const dotenv = require('dotenv');
const userroutes = require('./Routes/userRoutes')
const restaurantroutes = require('./Routes/restaurantsRoutes')
const cors = require('cors');
const Restaurant = require('./models/restaurantModel');
const connectDB = require('./config/db');


dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*', 
    credentials: true 
  }));

app.use('/users',userroutes);
app.use('/users/r',restaurantroutes);

// app.get('/restaurants/:name', async (req, res) => {
//     const { name } = req.params;
    
//     try {
//       const restaurant = await Restaurant.findOne({ name });
//       console.log(name)
      
//       if (restaurant) {
//         return res.json(restaurant);
//       } else {
//         return res.status(404).json({ message: 'Restaurant not found' });
//       }
//     } catch (error) {
//       return res.status(500).json({ message: 'Server Error', error: error.message });
//     }
//   })

app.get('/',(req,res)=>{res.json('working')})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});