const  dotenv =require("dotenv");
const mongoose = require('mongoose');
const uuidv4 = require("uuid");

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

const UserSchema =new mongoose.Schema({
    data:{
        type:String,
        required:true,
    },
    uniqueCode:{
    type:String,
    required:true,
    unique:true
  }
}

);

const User=mongoose.model("User",UserSchema);


/* Password
8War7ZfggfKdeNZ8
*/
app.post("/",(req, res) =>{
const obj = req.body;
const data =Object.keys(obj)[0];
const uniqueCode=uuidv4.v4();
console.log(uniqueCode);
store(data,uniqueCode,res);

/*
db.collections('code').insertOne(obj)
  .then(result => {
    res.status(201).json(result)
  })
  .catch(err => {
    res.status(500).json({err: 'Could not create doc'})
  })
*/
})

async function store(data,uniqueCode,res) {
    const user= User({data:data,uniqueCode:uniqueCode});
    await user.save();
res.send(user);
    }


app.post("/:uniqueCode",(req,res)=>{
    const uniqueCode=req.params.uniqueCode;
    find(uniqueCode,res);

})
app.get("/:uniqueCode",(req,res)=>{
    const uniqueCode=req.params.uniqueCode;
    find(uniqueCode,res);
    console.log(res.data);
})



async function find(uniqueCode,res){
    const user= await User.findOne({uniqueCode:uniqueCode});
    if(user){
        res.send(user);
    }
}

// url should be used instead of id

app.get("/code/",(req,res)=>{

if (ObjectId.isValid(req.params.id)) {
    db.collection('code')
      .findOne({_id: ObjectId(req.params.id)})
      res.send({body:1})
      .then(doc =>{
          res.status(200).json(doc)
          console.log("200");
      })
      .catch(err => {
          res.status(500).json({error: 'could not fetch doc'})
      })
}
else{
    res.status(500).json({error: 'invalid id'})
}

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