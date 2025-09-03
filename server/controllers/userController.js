const userModel=require("../models/userModel");
const loginController=async(req,res)=>
{
  try {
  const {username,password}=req.body;
  const user=await userModel.findUser(username);

  if (user.password===password)
  {
    res.status(200);
    res.send(
      {
        success:true,
        message:"Logged in successfully",
        data:user,
      }
    );
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
  catch (error) {
    res.status(error.status);
    res.send(
      {
        success:false,
        message:error.message
      }
    )
  }
} ;

const signupController= async (req,res)=>
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
    
    const user=await userModel.create(userData);
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
  }



}


module.exports={loginController,signupController};
