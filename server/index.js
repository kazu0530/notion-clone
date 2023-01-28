const express = require("express")
const mongoose = require("mongoose")
const app = express();
const PORT = 5500;
require("dotenv").config

// DB接続
try{
    mongoose.connect(
process.env.MONGODB_URL
    )
}catch(error){
    console.log(error);
}


app.listen(PORT, () => {
console.log("起動中")
})