const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    addresses:[{
        state:{ type:String },
        city:{ type:String },
        pincode:{ type:Number },
        phonenumber:{ type:Number },
        fulladdress:{ type:String }
    }],
    cards:[{
        cardnumber:{type:Number,default:''},
        expiration:{type:Number,default:''},
        cvv:{type:Number,default:''},
        holdername:{type:String,default:''},
    }],

})

module.exports = mongoose.model('User',userSchema); 