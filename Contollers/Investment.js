const express = require('express');
const router = express.Router();
const PostPlan =  require('../Models/PostPlan') 


const postplans =  async(req, res) => {
    const { domain, market, amountInvest, username } = req.body;
    
    if (!domain || !market || !amountInvest || !username) {
      res.send("plzz fill all the fields...");
    }
    const newpostplan = new PostPlan({ domain, market, amountInvest, username });
  
    await newpostplan.save();
  };

  const simple =  async(req, res) => {
     res.send('it is simple api ')
    
  };

module.exports = {postplans,simple};