const  dotenv =require("dotenv");
const mongoose =require( "mongoose");
const express= require("express");
const https =require("https");
const bodyParser = require("body-parser");
const app =express();
const cors = require("cors");
dotenv.config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
}
/* Password
8War7ZfggfKdeNZ8
*/
app.post("/",(req, res) =>{
const obj = req.body;
console.log(Object.keys(obj)[0]);


})

app.get("/",(req,res)=>{
    res.send("First request!");
})

/*

app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500
    const errorMessage =err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
})
*/
app.listen(8800,()=>{
    console.log("Connected to Backend !");

})