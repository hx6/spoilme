const mongoose = require('mongoose');
const Schema = mongoose.Schema

  const userSchema = new Schema({
    firebaseId: String, //conexion con id firebase
    name: String,
    friends: Array //firebase id
  });

  module.exports = mongoose.model('UserData', userSchema)
  
  