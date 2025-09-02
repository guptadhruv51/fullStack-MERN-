const userModel=require("../models/userModel");
const loginController=(req,res)=>
{
  const {username,password}=req.body;
  const user=userModel.users.find(user=>user.username===username);
  if(!user)
  {
    res.status(403);
    res.send(
      {
        success:false,
        message:"username exists already"
      }
    )
  }
  else{
  if (user.password===password)
  {
    res.status(200);
    res.send(
      {
        success:true,
        message:"Logged in successfully",
        data:user,
      }
    )
  }
  else{
    res.status(401);
    res.send(
      {
        success:false,
        message:"Incorrect password !!!"
      }
    )
  }
  
  }
};

const signupController=(req,res)=>
{

  const userData=req.body;

  // check if user already exists 
  if(userModel.users.find(({username})=>username===userData.username))
  {
    res.status(403);
    res.send(
      {
        success:false,
        message:"username exists already"
      }
    )
  }
  
  else{
    userModel.users.push(userData);
    res.status(201);
    res.send(
      {
        success:true,
        message:"user created"
      }
    )
  }



}

module.exports={loginController,signupController};
