const mongoose = require('mongoose');
const Schema = mongoose.Schema

  const articleSchema = new Schema({
    name: {type: String, required: true},
    price: Number,
    store: String,
    description: String,
    reserved: {type: Boolean, default: false},
    thumbnailUrl: {type: String},
    createdBy: String 
  });

  module.exports = mongoose.model('Article', articleSchema)
  