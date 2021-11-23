const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const todoRouter = require('./todo/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Request
app.use('/todo', todoRouter);  // 3000/todo/:todoId

const startApplication = async() => {
  const mongoDbUrl = 'mongodb://localhost:27017/todo';

  await mongoose.connect(mongoDbUrl, { useNewUrlParser: true, useUnifiedTopology: true});
  console.log(`Successfully conected to at ${mongoDbUrl}`);

  await app.listen(PORT);
  console.log(`Listening on port ${PORT}`);
}

startApplication();