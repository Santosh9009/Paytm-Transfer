const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Santosh:Santosh%4063711@cluster0.cmycynz.mongodb.net/paytm")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    maxlength: 30,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
  },
  firstname: {
    type: String,
    maxlength: 50,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    maxlength: 50,
    required: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  }
});

const AccountSchema = new mongoose.Schema({
  userid:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref : 'user',
  },
  balance:{
    type:Number,
    required: true,
  }
})

const User = mongoose.model('user',UserSchema)
const Account = mongoose.model('account',AccountSchema)

module.exports = {
  User
}