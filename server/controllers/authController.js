const { verifyToken } = require("../utils/jwtUtils");
const UserModel=require("../models/userModel")
const authController = async (req, res, next) => 
{
  try
  {
    const {authToken}=req.cookies;
    const data=verifyToken(authToken);
    if(data)
    {
      const {username}=data;
      const {secret,password,...user}=await UserModel.findUser(username);
      //for sending data across different controllers
      res.locals.user=user;
      next();  // call the next controller

    }
  }
  catch(error)
  {
    next(error);
  }
}

module.exports={authController};