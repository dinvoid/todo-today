const mongoose = require('mongoose');

//create schema
const todoItems = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }

})

module.exports=mongoose.model('todo', todoItems);
