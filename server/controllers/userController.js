const userModel=require("../models/userModel");
const { errorCreator, responseCreator } = require("../utils/responsehandler");
const {generatePassword,verifyPassword}= require("../utils/passwordUtil");
const { generateToken, verifyToken } = require("../utils/jwtUtils");
// const errorHandler = require("../utils/errorhandler");
const loginController=async(req,res,next)=>
{
  try {
  const {username,password}=req.body;
  const user=await userModel.findUser(username);
  
  if (await verifyPassword(password,user.password))
  {
    const token=generateToken(user);
     res.status(200);
    // res.send(
    //   {
    //     success:true,
    //     message:`${username}Logged in successfully`,
    //     data:user,
    //   }
    // );
    res.send(responseCreator(`${username} Logged in Successfully`,{...user,token}));
  }
  else{
    // const error=new Error('Incorrect password');
    // error.status=401;
    // throw error;

    errorCreator("Incorrect password!!!",401)
    // res.status(401);
    // res.send(
    //   {
    //     success:false,
    //     message:"Incorrect password !!!"
    //   }
    // )
  }
  
  }
  catch (error) {
    // res.status(error.status);
    // res.send(
    //   {
    //     success:false,
    //     message:error.message
    //   }
    // )
    next(error);
  }
} ;

const signupController= async (req,res,next)=>
{

  const userData=req.body;

  // const doesUserExist=await userModel.findUser(userData.username);
  // check if user already exists 
  // if(userModel.findUser(({username})=>username===userData.username))
  // if(!doesUserExist)
  // {
  //   res.status(403);
  //   res.send(
  //     {
  //       success:false,
  //       message:"username exists already"
  //     }
  //   )
  // }
  
  // else{
    try{
      
    const hashedPwd=await generatePassword(userData.password);
    userData.password=hashedPwd;
    const user=await userModel.create(userData);
    console.log(user);
    if(user)
    {
    res.status(201);
    res.send(
      {
        success:true,
        message:"user created",
        data:user
      }
    );
  }}
  catch(error)
  {
    next(error);
  }



}

const loginWithToken=async(req,res,next)=>
{
  try{
  const {authorization}=req.headers;
  //console.log(authorization.split('Bearer')[1].split(' ')[1]);
  const token=authorization.split('Bearer')[1].split(' ')[1];
  console.log(token);
  const {username}=verifyToken(token);
  if(username)
  {
    const user=await userModel.findUser(username);
    res.send(responseCreator('Logged in successfully!!',user));
  }
}
  catch(error)
  {
      next(error);
  }

}

module.exports={loginController,signupController,loginWithToken};
