const express = require('express');
const mongoose= require('mongoose');
const postIdeaSchema = new mongoose.Schema({
    postedUserId:
    {
        type: String,
        required: true
    },
    category:
    {
        type: String,
        required: true
    },
    requiredamount:
    {
        type: String,
        required: true
    },
    market:
    {
        type: String,
        required: true
    },
    shortdes:
    {
        type: String,
        required: true
    },
    interests: [{ senderId: String, messageInput: String, timestamp: Date }],
    

})

const PostIdea = new mongoose.model('postidea',postIdeaSchema);

module.exports= PostIdea;