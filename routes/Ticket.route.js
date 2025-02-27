const express = require("express");
const TicketRoute = express.Router();
const TicketModel = require("../models/Ticket.model")
TicketRoute.get("/identifdy",(req,res)=>{
const{email,userId}= req.body;
let existing user = await TicketModel.findOne({email,userId});
})