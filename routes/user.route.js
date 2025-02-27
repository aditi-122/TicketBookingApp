const express = require("express");
const UserRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_ROUNDS =Number(process.env.SALT_ROUNDS);
UserRoute("/signup",async(requ,res)=>{
try {let email = requ.body.email;
    let myPlaintextPassword =requ.body.password;
    bcrypt.hash(myPlaintextPassword, SALT_ROUNDS, async function(err, hash) {
    });
    if(!user){
        let user ={email:req.body.email,password:requ.body.password,userId:requ.body.userId}
        await UserModel.create(user); 
        res.status(200).json({msg:"User Route Created"},user);
    }
    else{
      
    }
} catch (error) {
    res.status(500).json({msg:"erorr in signup route"})
}
})
UserRoute.post("/login",(req,res)=>{
    let user1 =UserModel.findOne(req.body.email,req.body._id);
})
module.exports = UserRoute;
