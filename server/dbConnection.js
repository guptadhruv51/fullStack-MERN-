const mongoose=require("mongoose");

const DB_URL='mongodb+srv://dhruvgupta2819:dPfhW72QvmkObmyT@cluster1.zmeppzb.mongodb.net/';
mongoose.connect(DB_URL).
then(()=>console.log("Connected Successfully!!")).
catch((err)=>console.log(err));