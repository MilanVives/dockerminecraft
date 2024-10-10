const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000

function connectDB(){
mongoose.connect('mongodb://mongodb:27017/test')
  .then(() => console.log('Connected!'))
  .catch(err => console.log('Error connecting'));}

setTimeout(connectDB, 3000)

  app.get('/', (req, res) => {
  res.send('Hello World!')})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})