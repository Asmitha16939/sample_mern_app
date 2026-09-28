let mongoose=require('mongoose');
let userSchema=mongoose.Schema({
    name:String,
    emailId:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String,
        enum:['HR','Employee']
    }

})
let users=mongoose.model('users',userSchema);
module.exports={users};