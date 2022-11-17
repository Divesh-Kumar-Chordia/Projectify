const mongoose = require('mongoose');
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

module.export=mongoose.model("User",UserSchema);
