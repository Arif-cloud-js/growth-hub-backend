const express = require('express');
const mongoose= require('mongoose');
const postjobSchema = new mongoose.Schema({
    username:
    {
        type: String,
        
    },
    title:
    {
        type: String,
       
    },
    amount:
    {
        type: String,
       
    },
    completion:
    {
        type: String,
        
    },
    detail:
    {
        type: String,
    },
    proposals:[
         {username:String,
          amount:String,
          completionTime:String,
          detail:String,
          PSId:String}
]
})

const Post = new mongoose.model('trim',postjobSchema);

module.exports= Post;