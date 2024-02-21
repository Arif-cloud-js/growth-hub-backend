const express = require('express');
const mongoose= require('mongoose');
const contactUs = new mongoose.Schema({
   name:
    {
        type: String,
        required: true
    },
    subject:
    {
        type: String,
        required: true
    },
    message:
    {
        type: String,
        required: true
    }

})

const ContactUs = new mongoose.model('contactus',contactUs);

module.exports= ContactUs;