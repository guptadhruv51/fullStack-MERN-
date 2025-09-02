const express=require('express');
const {signupController,loginController}=require('../controllers/userController')
const userRouter=express.Router();

userRouter.post('/signup',signupController);
userRouter.post('/login',loginController);


// userRouter.post();
module.exports=userRouter;