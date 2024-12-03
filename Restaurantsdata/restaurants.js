// seedRestaurants.js
const mongoose = require('mongoose');
const Restaurant = require('../models/restaurantModel'); // Import the model

// Seed restaurants data

    const restaurants = [
        {
            name: "McDonald's London",
            image:
        'https://res.cloudinary.com/diuif9frr/image/upload/v1732900651/food%20delivery/bhvw5aqhdlslsibgg8ho.png',
            address: { 
                street: '123 Foodie Lane', 
                city: 'Culinary City', 
                state: 'Gastronomy', 
                zip: '54321', 
                country: 'USA' 
            },
            cuisine: 'Fast Food',
            rating: 4.5,
            menu: [
                {
                    category: 'Burgers',
                    items: [
                        { name: 'Big Mac', description: 'Two beef patties with special sauce', cost: 150 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Chicken McSandwich', description: 'Crispy chicken with lettuce and mayo', cost: 120 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Quarter Pounder', description: 'Juicy beef patty with cheese', cost: 140 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Filet-O-Fish', description: 'Fish fillet with tartar sauce', cost: 130 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                    ],
                },
                {
                    category: 'Fries',
                    items: [
                        { name: 'Regular Fries', description: 'Crispy golden fries', cost: 70,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051287/food%20delivery/if0mgdyetx6qul02bbhz.png" },
                        { name: 'Cheese Fries', description: 'Topped with melted cheese', cost: 100,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051287/food%20delivery/if0mgdyetx6qul02bbhz.png" },
                        { name: 'Curly Fries', description: 'Seasoned curly fries', cost: 90,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051287/food%20delivery/if0mgdyetx6qul02bbhz.png" },
                        { name: 'Sweet Potato Fries', description: 'Sweet and savory fries', cost: 80,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051287/food%20delivery/if0mgdyetx6qul02bbhz.png" },
                    ],
                },
                {
                    category: 'Cold Drinks',
                    items: [
                        { name: 'Coca-Cola', description: 'Chilled Coca-Cola', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png" },
                        { name: 'Sprite', description: 'Chilled Sprite', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png" },
                        { name: 'Fanta', description: 'Chilled Fanta Orange', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Iced Tea', description: 'Refreshing iced tea', cost: 60 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                    ],
                },
            ],
        },
        {
            name: 'Papa Johns',
            image:
              'https://res.cloudinary.com/diuif9frr/image/upload/v1732900652/food%20delivery/w8qxfv4gtp95olaz9fvi.png',
            address: { 
                street: '456 Pizza Street', 
                city: 'Topping Town', 
                state: 'Cheesetopia', 
                zip: '67890', 
                country: 'USA' 
            },
            cuisine: 'Pizza',
            rating: 4.7,
            menu: [
                {
                    category: 'Pizzas',
                    items: [
                        { name: 'Margherita', description: 'Classic tomato and cheese', cost: 200,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733050804/food%20delivery/qgmx6vu9vs5cnsa3p4wg.jpg" },
                        { name: 'Pepperoni', description: 'Loaded with pepperoni', cost: 250,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733050804/food%20delivery/qgmx6vu9vs5cnsa3p4wg.jpg" },
                        { name: 'BBQ Chicken', description: 'Chicken with BBQ sauce', cost: 280,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733050804/food%20delivery/qgmx6vu9vs5cnsa3p4wg.jpg" },
                        { name: 'Veggie Supreme', description: 'Loaded with fresh veggies', cost: 230,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733050804/food%20delivery/qgmx6vu9vs5cnsa3p4wg.jpg" },
                    ],
                },
                {
                    category: 'Sides',
                    items: [
                        { name: 'Garlic Breadsticks', description: 'Soft breadsticks with garlic butter', cost: 80 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Cheesy Jalapeno Poppers', description: 'Spicy cheesy bites', cost: 120 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Potato Wedges', description: 'Seasoned potato wedges', cost: 100 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Chicken Wings', description: 'Spicy chicken wings', cost: 150 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                    ],
                },
                {
                    category: 'Cold Drinks' ,
                    items: [
                        { name: 'Pepsi', description: 'Chilled Pepsi', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Mountain Dew', description: 'Chilled Mountain Dew', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: '7-Up', description: 'Chilled 7-Up', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Lemonade', description: 'Refreshing lemonade', cost: 60 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                    ],
                },
            ],
        },
        {
            name: 'KFC West London',
      image:
      'https://res.cloudinary.com/diuif9frr/image/upload/v1732900652/food%20delivery/d9pcbueljejztksujkyf.png',
            address: { 
                street: '789 Chicken Blvd', 
                city: 'Crispy City', 
                state: 'Fingerlickin', 
                zip: '23456', 
                country: 'USA' 
            },
            cuisine: 'Chicken',
            rating: 4.6,
            menu: [
                {
                    category: 'Chicken Buckets',
                    items: [
                        { name: '8 Piece Bucket', description: '8 pieces of crispy fried chicken', cost: 350,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/bwxhako18ivugjcszhlp.jpg" },
                        { name: '12 Piece Family Bucket', description: '12 pieces with sides', cost: 500,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/bwxhako18ivugjcszhlp.jpg" },
                        { name: '16 Piece Party Bucket', description: '16 pieces of crispy chicken', cost: 650,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/bwxhako18ivugjcszhlp.jpg" },
                        { name: 'Popcorn Chicken Bucket', description: 'Bite-sized crispy chicken', cost: 300,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/bwxhako18ivugjcszhlp.jpg" },
                    ],
                },
                {
                    category: 'Burgers',
                    items: [
                        { name: 'Zinger Burger', description: 'Spicy chicken burger', cost: 150 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Classic Chicken Sandwich', description: 'Juicy chicken fillet', cost: 130 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Tower Burger', description: 'Chicken burger with hash brown', cost: 180 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Veg Zinger Burger', description: 'Spicy veggie burger', cost: 140 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                    ],
                },
                {
                    category: 'Sides',
                    items: [
                        { name: 'Mashed Potatoes', description: 'Creamy mashed potatoes', cost: 80 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Coleslaw', description: 'Fresh coleslaw', cost: 70 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Corn on the Cob', description: 'Sweet corn on the cob', cost: 90 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'French Fries', description: 'Crispy golden fries', cost: 70 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                    ],
                },
            ],
        },
        {
            name: 'Texas Chicken',
            image:
              'https://res.cloudinary.com/diuif9frr/image/upload/v1732900653/food%20delivery/abpcpt0o2xqy0z0bcemj.png',
            address: { 
                street: '321 Crunchy Lane', 
                city: 'Spice City', 
                state: 'Chickenland', 
                zip: '78901', 
                country: 'USA' 
            },
            cuisine: 'Fast Food',
            rating: 4.3,
            menu: [
                {
                    category: 'Chicken Meals',
                    items: [
                        { name: '2 Piece Meal', description: '2 pieces with biscuit and drink', cost: 180,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/bwxhako18ivugjcszhlp.jpg" },
                        { name: 'Chicken Tenders', description: 'Crispy chicken tenders', cost: 200,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/bwxhako18ivugjcszhlp.jpg" },
                        { name: 'Chicken Wings', description: 'Spicy chicken wings', cost: 220,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/bwxhako18ivugjcszhlp.jpg" },
                        { name: 'Crispy Chicken Wrap', description: 'Chicken wrap with ranch sauce', cost: 170,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/bwxhako18ivugjcszhlp.jpg" },
                    ],
                },
                {
                    category: 'Burgers',
                    items: [
                        { name: 'Tex Supreme Burger', description: 'Large chicken burger with sauce', cost: 150 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Crispy Chicken Sandwich', description: 'Chicken sandwich with mayo', cost: 130 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Spicy Chicken Deluxe', description: 'Chicken burger with spicy mayo', cost: 160 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Grilled Chicken Burger', description: 'Grilled chicken patty', cost: 140 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                    ],
                },
                {
                    category: 'Sides',
                    items: [
                        { name: 'Honey Butter Biscuits', description: 'Buttery biscuits with honey', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Fries', description: 'Seasoned fries', cost: 70 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Corn Nuggets', description: 'Crispy corn bites', cost: 80 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Mac & Cheese', description: 'Creamy mac and cheese', cost: 90 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                    ],
                },
            ],
        },
        {
            name: 'Burger King',
            image:
              'https://res.cloudinary.com/diuif9frr/image/upload/v1732900652/food%20delivery/s0eyvodyhmtpc75zwknq.png',
            address: { 
                street: '654 Flame Grill Ave', 
                city: 'Whopper Town', 
                state: 'Grilltopia', 
                zip: '54321', 
                country: 'USA' 
            },
            cuisine: 'Fast Food',
            rating: 4.4,
            menu: [
                {
                    category: 'Burgers',
                    items: [
                        { name: 'Whopper', description: 'Flame-grilled beef patty', cost: 200 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Chicken Royale', description: 'Crispy chicken patty', cost: 180 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Double Whopper', description: 'Double beef patty', cost: 250 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                        { name: 'Veggie Burger', description: 'Grilled veggie patty', cost: 160 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051442/food%20delivery/zdiqbabxs2ut8sfye1dy.png"},
                    ],
                },
                {
                    category: 'Sides',
                    items: [
                        { name: 'Onion Rings', description: 'Crispy onion rings', cost: 70 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Mozzarella Sticks', description: 'Cheesy mozzarella sticks', cost: 100 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Hash Browns', description: 'Crispy potato bites', cost: 80 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Fries', description: 'Classic golden fries', cost: 70 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                    ],
                },
                {
                    category: 'Drinks',
                    items: [
                        { name: 'Coca-Cola', description: 'Chilled Coca-Cola', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Iced Tea', description: 'Refreshing iced tea', cost: 60 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Lemonade', description: 'Fresh lemonade', cost: 60 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Chocolate Shake', description: 'Rich chocolate milkshake', cost: 100 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                    ],
                },
            ],
        },
        {
            name: 'Shaurma 1',
            image:
              'https://res.cloudinary.com/diuif9frr/image/upload/v1732900652/food%20delivery/w9lnd366quvtqsmyqrxr.png',
            address: { 
                street: '111 Shawarma Street', 
                city: 'Spicy City', 
                state: 'Flavorville', 
                zip: '13579', 
                country: 'USA' 
            },
            cuisine: 'Middle Eastern',
            rating: 4.2,
            menu: [
                {
                    category: 'Shawarmas',
                    items: [
                        { name: 'Chicken Shawarma', description: 'Spicy chicken wrapped in pita', cost: 150,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/lxxrpfcb81ldufl7sngt.jpg" },
                        { name: 'Beef Shawarma', description: 'Juicy beef wrapped in pita', cost: 180, imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/lxxrpfcb81ldufl7sngt.jpg" },
                        { name: 'Falafel Shawarma', description: 'Crispy falafel in pita', cost: 130, imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/lxxrpfcb81ldufl7sngt.jpg" },
                        { name: 'Shawarma Deluxe', description: 'Mixed chicken and beef in pita', cost: 200, imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733048247/food%20delivery/lxxrpfcb81ldufl7sngt.jpg" },
                    ],
                },
                {
                    category: 'Sides',
                    items: [
                        { name: 'Hummus', description: 'Smooth hummus with pita', cost: 70,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg" },
                        { name: 'Tabbouleh', description: 'Fresh parsley salad', cost: 60 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Falafel', description: 'Crispy fried chickpea balls', cost: 80 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                        { name: 'Fried Pickles', description: 'Crunchy fried pickles', cost: 90 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051037/food%20delivery/zgkmhv4qfz8dan9bbb1c.jpg"},
                    ],
                },
                {
                    category: 'Drinks',
                    items: [
                        { name: 'Mint Lemonade', description: 'Refreshing mint lemonade', cost: 50 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Ayran', description: 'Salty yogurt drink', cost: 60 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Soda', description: 'Chilled soda', cost: 40 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                        { name: 'Turkish Tea', description: 'Traditional Turkish tea', cost: 30 ,imgurl:"https://res.cloudinary.com/diuif9frr/image/upload/v1733051943/food%20delivery/s7ysgs44pb2rmkkk73ex.png"},
                    ],
                },
            ],
        },
    ];
    const seedRestaurants = async () => {
    try {
        // Check if data already exists
        const count = await Restaurant.countDocuments();
        if (count === 0) {
            // Insert data
            await Restaurant.insertMany(restaurants);
            console.log('Database seeded successfully!');
        } else {
            console.log('Data already exists, skipping seed.');
        }
    } catch (error) {
        console.error('Error seeding data:', error);
    }
};

// Call the function to seed the data
// seedRestaurants();
module.exports = seedRestaurants ;