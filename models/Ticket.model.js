const mongoose = require("mongoose");
const TicketSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    dateOfTravel: Date,
    modeOfTravel:{type:String,enum:[rail/bus],required:true},
    perHeadPrice:{type:Number,required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    numberOfPassengers:{type:Number,required:true},
    totalPrice:{AutoCalculated:(perHeadPrice * numberOfPassengers)} 
})
const TicketModel = mongoose.model("ticket",TicketSchema)
module.exports = TicketModel;