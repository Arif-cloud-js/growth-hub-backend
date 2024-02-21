const express = require('express');
const mongoose= require('mongoose');
const jwt      = require('jsonwebtoken');
const { string } = require('@tensorflow/tfjs');
const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    role:
    {
        type: String,
        required: true,
        default:"client"
    },
    experience1 :{type: String,},
    experience2: {type: String,},
    skill1: {type: String,},
    skill2:{type: String,}, 
    skill3:{type: String,},
    skill4:{type: String,},
    notifications:[
        {  username:{ 
                 type: String},
           notificationmessage:{
            type: String},
            projectid:{
                type : String
            }
           }      
        
    ],
    hiring:[
        {  hiredByUsername:{ 
                 type: String},
           hiringMessage:{
            type: String},
            hiringDuration:{
                type : String
            },
            hourlyPaid:{ 
                type: String},
           }      
        
    ],
    offers:[
        {  offeredByUsername:{ 
                 type: String},
           offerMessage:{
            type: String},
            offerDuration:{
                type : String
            },
            offerprofit:{ 
                type: String},
           }      
    ],
    messages: [{ sender: String, senderId : String , content: String, timestamp: Date }],
    
})






const Users = new mongoose.model("USER", userSchema); 

module.exports =Users;
 
