const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Santosh:Santosh%4063711@cluster0.cmycynz.mongodb.net/paytm")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 5,
    maxlength: 10,
    unique: true,
    lowercase: true,
    required: true,
    trim: true,
  },
  firstname: {
    type: String,
    maxlength: 20,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    maxlength: 20,
    required: true,
    trim: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  }
});


const User = mongoose.model('user',UserSchema);

module.exports = {
  User
}