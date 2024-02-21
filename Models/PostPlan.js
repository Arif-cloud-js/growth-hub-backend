const express = require('express');
const mongoose= require('mongoose');
const postPlanSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true
    },
    domain:
    {
        type: String,
        required: true
    },
   amountInvest:
    {
        type: String,
        required: true
    },
    market:
    {
        type: String,
        required: true
    },
    interests:[{
        username:{
            type:String
          }, 
          detail:{
            type:String
          },

},]

})

const PostPlan = new mongoose.model('postplan',postPlanSchema);

module.exports= PostPlan;