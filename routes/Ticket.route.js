const express = require("express");
const TicketRoute = express.Router();
const TicketModel = require("../models/Ticket.model")
TicketRoute.get("/identifdy",async(req,res)=>{
const{email,userId}= req.body;
let ticket = await TicketModel.findOne({email,userId});
})