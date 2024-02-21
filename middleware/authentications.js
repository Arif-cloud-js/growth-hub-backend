
const  jwt  = require('jsonwebtoken');
const cookiParser=require('cookie-parser');
const dotenv = require('dotenv');
const express =require('express');

dotenv.config({path: './config.env' });

const app=express();
app.use(cookiParser());


module.exports = Authenticate;