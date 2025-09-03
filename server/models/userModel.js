const {Schema,model}=require('mongoose');

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
const userModel=model('users',userSchema);


module.exports=userModel;