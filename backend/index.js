const express = require('express');
require('dotenv').config(); 
const cors = require('cors');

const mongoose = require('mongoose');
const chatBotRoutes = require('./routes/chatbot.route.js');

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use('/bot/v1', chatBotRoutes);
