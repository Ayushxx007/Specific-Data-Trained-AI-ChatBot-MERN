const express = require('express');
const {Message}=require('../Controllers/chatBot.message.js');
const router = express.Router();




router.post('/message',Message);


module.exports = router;