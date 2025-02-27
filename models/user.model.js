const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name: String,
    email: {type:String,Unique:true,required:true},
    password:{type:String,required:true},
    mobileNumber: String,
    gender:{type: String,enum:["male","female"]},
    role: {type:String,enum:["admin","customer"]},
},)
const UserModel = mongoose.model("user",UserSchema);
module.exports = UserModel;