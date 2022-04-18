const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requried:true
    },
    image:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
   password: {
     type:String,
     require:true
    },

});
 
module.exports=mongoose.model('admin',adminSchema);