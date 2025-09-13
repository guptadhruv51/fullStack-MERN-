const { model, Schema } = require('mongoose');


const userSchema=new Schema(
  {
    username:{
      type:String,
      unique:true,
      required:[true,"username is mandatory!!"],
    },
    email:{
      type:String,
      unique:true,
      required:[true,"email is mandatory!!"],
    },
    name:{
      type:String,
      required:[true,"name is mandatory!!"],
    },
    password:{
      type:String,
      required:[true,"password is mandatory!!"],
    },
    secret:{
      type: String,

    },
    cart:
    {
      type:[Object],
    },


  }
);

userSchema.statics.createUser=async(userdata)=>
{
  const user=await userModel.create(user);

  return user;
};

userSchema.statics.findUser=async(username)=>
{
  const user=await userModel.findOne({
    username
  },{_id:0,__v:0});
  if(!user)
  {
    const err=new Error('username does not exist');
    err.status=404;
    throw err;
  }
  return user;

}

userSchema.statics.addToCart=async(username,product)=>
{

  const userData=await userModel.findOneAndUpdate(
    {username},
    {
      $push:{cart:{...product,quantity:1}},
      $inc:{totalCount:1,totalValue:product.price}
    },
    {
      new:true
    }
  );
  return sanitiseUserData(userData);

};
userSchema.statics.updatePassword=async(username,password)=>
{
    const updateData=await userModel.updateOne(
      {username},
      {
      $set:{password}
      }
    )
    console.log("Model working");
     if(updateData)
      return `Password updated for ${username} successfully`

}

export const sanitiseUserData=(userData)=>
{
  const {secret,password,__v,_id,...data}=userData?.toObject();

  return data;

}
const userModel=model('users',userSchema);


module.exports=userModel;