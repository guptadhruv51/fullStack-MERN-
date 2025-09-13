const speakeasy=require('speakeasy');
const QRcode=require('qrcode');
// const secret=speakeasy.generateSecret({})

const generateQRcode=async (username)=>
{
  const {base32:secret,otpauth_url}=speakeasy.generateSecret({
    issuer:"Dhruv Guptaa",
    name:username,
  });
  const qrcode= await (QRcode.toDataURL(otpauth_url));

  
  console.log(secret);
  console.log(qrcode);

  return {secret,qrcode};
};

const verifyOTP=(secret,otp)=>
  {
      const isVerify=speakeasy.totp.verify({
        secret,
        token:otp,
        encoding:'base32'
      })

      return isVerify;
  };

  module.exports={generateQRcode,verifyOTP};

  // generateQRcode("abcd12345").then(console.log);



