const mongoose = require('mongoose');

const UserSchema=  mongoose.Schema({
name: {
    type: String,
    required: [true, "Name is required"],
},
email: {
    type: String,
    required: [true, "Email is Required"],
},
password: {
    type: String,
     required: true,
},
isAdmin: {
    type: Boolean,
    default: false,
  },

}, {timestamps: true})

const UserModel = mongoose.model('UserData',UserSchema );
module.exports= UserModel;