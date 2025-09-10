const errorHandler=(err,req,res,next)=>
{
  // MongoDb duplicate key error
  if(err.code==11000)
  {
    err.message='Username already exists!'

  }
    if(err.status)
    {
      res.status(err.status);
      
    }
    res.send({
      success:false,
      message:err.message
    });
}

module.exports=errorHandler;
