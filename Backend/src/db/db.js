const mongoose = require("mongoose");

async function ConnectDB(){
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Server connected to Database successfully !!");
}


module.exports= ConnectDB;