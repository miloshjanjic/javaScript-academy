const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
  res.send('hello world');
})

app.get('/api',(req,res) => {
  res.send('hello API !');
})






app.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`);
})