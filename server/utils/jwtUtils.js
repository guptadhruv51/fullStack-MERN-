const {sign,verify}=require('jsonwebtoken');
const { errorCreator } = require('./responsehandler');
const secretKey='MY_SECRET_KEY';
const generateToken=(userData,time='1h')=>
{
  const {username}=userData;
  
  const token=sign({username},secretKey,
    {
      expiresIn:time
    }
  )
  return token;
}

const verifyToken=(token)=>
{
  if(!token)
  {
    errorCreator("Token Missing, Please Login again",401);
  }
  return verify(token,secretKey);
}

module.exports={generateToken,verifyToken}

const token=generateToken({username:'abcd12345'},time='30s')