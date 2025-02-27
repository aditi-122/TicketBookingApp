const express = require("express");
const connectToDb = require("./configs/mongo.config");
const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use("/",(req,res)=>{
    res.send("this the test route");
});
app.use(PORT,(req,res)=>{
    connectToDb()
    res.send("Server Started")
})