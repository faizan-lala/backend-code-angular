const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const cartSchema =new mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    productlist:[{
            type:Schema.Types.ObjectId,
            requried:true,
            ref:'product'
        
    }]
},{timestamps:true});

module.exports = mongoose.model('carts',cartSchema);