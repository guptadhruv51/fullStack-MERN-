const userModel=require("../models/userModel");
const { errorCreator, responseCreator } = require("../utils/responsehandler");
const {generatePassword,verifyPassword}= require("../utils/passwordUtil");
const { generateToken, verifyToken } = require("../utils/jwtUtils");
const { generateQRcode, verifyOTP } = require("../utils/totpUtils");
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
    res.cookie('authToken',token,{maxAge:3600_000,httpOnly:true})
    res.send(responseCreator(`${username} Logged in Successfully`,{user}));
    
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
    const userData=req.body;
    const username=userData.username;
    const hashedPwd=await generatePassword(userData.password);
    userData.password=hashedPwd;
    const {qrcode,secret}=await generateQRcode(username);
    const user=await userModel.create({...userData,secret});
    console.log(user);
    if(user)
    {
    res.status(201);
    // res.send(
    //   {
    //     success:true,
    //     message:"user created",
    //     data:user
    //   }
    // );

    res.send(
      `
       <section>
       <body>
        <h1>Two Factor Auth</h1>
          <img src="${qrcode}"/>
        </body>
        </section>  
      `
    )
  }}
  catch(error)
  {
    next(error);
  }



}

const loginWithToken=async(req,res,next)=>
{
  try{
    console.log(req.cookies);
  const {authToken}=req.cookies;
  //console.log(authorization.split('Bearer')[1].split(' ')[1]);
  // const token=authorization.split('Bearer')[1].split(' ')[1];
  //console.log(authToken);
  const data=verifyToken(authToken);
  if(data)
  {
    const {username}=data;
    const user=await userModel.findUser(username);
    res.send(responseCreator('Logged in successfully!!',user));
  }
}
  catch(error)
  {
      next(error);
  }

}

const resetPassword=async(req,res,next)=>
{
  try{
      // console.log("Working")
      const {username,password,otp}=req.body;
      const {secret}=await userModel.findUser(username);
      // console.log("Secret Found")
      const isVerified=verifyOTP(secret,otp);
      if(isVerified)
      {
          console.log(password);
          const pwdHash=await generatePassword(password);
          console.log("Password generated")
          const message=await userModel.updatePassword(username,pwdHash);
          res.send(responseCreator(message));
      }
      else{
        errorCreator('Invalid OTP',401);
      }

    }
    catch(error)
    {
      next(error)
    }
}

module.exports={loginController,signupController,loginWithToken,resetPassword};
