const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        requried:true
    },
 
    mobile:{
        type:String,
    },
   password: {
     type:String,
     require:true
    },

});
 
module.exports=mongoose.model('user',userSchema);