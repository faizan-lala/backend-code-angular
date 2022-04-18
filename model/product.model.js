const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const productSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    brand: {
        type: String,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    categoryType:{
        type:String,
        required:true
    }
    ,
  
    size: [{
        size: {
            type: Number
        }
    }],

    color: [{
        color: {
            type: String
        }
    }],

    frontImage: {
        type: String,
        required: true
    },
    bottomImage: {
        type: String
    },
    leftImage: {
        type: String
    },
    rightImage: {
        type: String
    },

    catId: Schema.Types.ObjectId
});

module.exports = mongoose.model('product', productSchema);