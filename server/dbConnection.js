const mongoose=require("mongoose");
const DB_URL=require("./dbDetails")
console.log(DB_URL.DB_URL);
 mongoose.connect(DB_URL).
then(()=>console.log("Connected Successfully!!")).
catch((err)=>console.log(err));

// const mongoose = require("mongoose");
// const DB_URL = require("./db");

// mongoose.connect(DB_URL)
//   .then(() => console.log("✅ Connected"))
//   .catch(err => console.error(err));