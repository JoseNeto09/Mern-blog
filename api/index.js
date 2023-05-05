const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://lopesneto4395:EuU1ecWnwCqr5XQS@cluster0.k6sesyk.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async(req, res) =>{
  const {username,password} =req.body;
  try{
    const userDoc = await User.create({username,password});
    res.json(userDoc);
  } catch(e) {
    res.status(400).json(e);
  }
});

app.listen(5000);