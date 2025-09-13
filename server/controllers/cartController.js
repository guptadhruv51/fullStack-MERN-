const userModel=require("../models/userModel");
const { responseCreator } = require("../utils/responsehandler");
const addToCart=async(req,res,next) =>
{
  try{
    const {username}=res.locals.user;
    const product=req.body;
    const data=await userModel.addToCart(username,product)
    res.send(responseCreator(`${product.title} is added to the cart`,data));
  }
  catch(error)
  {
    next(error);
  }

}

module.exports={addToCart};