const mongoose = require('mongoose');
//Create a mongoose schema,make title and CreateAt by the properties and make them required

const todoSchema = new mongoose.Schema({ 
  title:  {
    type: String,
    required: true
  },
  createdAt:  { 
    type: Date,
    required: true
  },
 });

 const Todo = mongoose.model('Todo', todoSchema);

 module.exports = Todo;