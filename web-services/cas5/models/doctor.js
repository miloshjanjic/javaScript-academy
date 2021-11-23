const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true
  // },
  name: {
    type: String,
    required: ['Name is a required field']
  },
  surname: {
    type: String,
    required: ['Surname is a required field']
  },
  birthDate: {
    type: String,
    required: ['date is a required field']
  },
  special: {
    type: String,
    required: ['Special is a required field']
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);