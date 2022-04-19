const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    userId : String,
    orderlist:[
        {
        productId:String,
        quantity:String,
        price:String  
    }
],
    total:String,
    address:String,
    mobile:String,
    shipping:String,
    payment:String,

    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("order",orderSchema);