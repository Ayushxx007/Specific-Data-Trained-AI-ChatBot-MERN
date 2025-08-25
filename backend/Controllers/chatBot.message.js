const User=require('../models/user.model.js');
const Bot=require('../models/bot.model.js');
const { botResponses } = require('./botResponse.js');   
const Message= async(req,res)=>{


    try{

        const text=req.body.text;
        if(!text?.trim()){
            return res.status(400).send("Message cannot be empty");
        }

        const user =await  User.create({sender:'user',text});


       
 


const normalizeText=text.toLowerCase().trim();
let botReply=botResponses[normalizeText] || "I’m sorry, I don’t have an answer for that right now.";

       
const bot=await Bot.create({text:botReply});
         res.status(200).json({userMessage:user.text,botMessage:bot.text});

    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
   
}

module.exports={Message};