const express=require('express');
require('./dbConnection.js');
const router = require('./router/router');
const cartRouter = require('./router/cartRouter');
const userRouter = require('./router/userRouter');
const app=express();
// server

// we configure the middleware,request handlers
// app.use();

// enables the server to parse the request body JSON 
app.use(express.json())
app.get('/checkserver/:id',(req,res)=>
{
  console.log(req.path);
  console.log(req.params);
  console.log(req.query)
  console.log(req.body);


  res.status(200);
  res.send({
    status:'success',
    message:'server running successfully'
  })
}
)
app.use('/router',router); 
app.use('/user',userRouter); 
app.use('/cart',cartRouter); 

//get request

const PORT=4000;

app.listen(PORT,()=>
{
  console.clear();
  console.log(`sever running on PORT - ${PORT}`);
});