var express = require('express');
var indexRouter = require('./routes/index');
var app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/cardsdb',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;