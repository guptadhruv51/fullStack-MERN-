const express=require('express');
const { addToCart } = require('../controllers/cartController');
const { authController } = require('../controllers/authController');
const cartRouter=express.Router();

// console.log("authController:", authController);
// console.log("addToCart:", addToCart);
cartRouter.post('/add',authController,addToCart);



// cartRouter.post();
module.exports=cartRouter;