const Users =  require('..//Models/userSchema')
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const UserProfile =  async(req, res) => {
  const userId = req.params.postedUserId;
  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID.' });
  }
    try {
     
  
      const user = await Users.findById(userId);
  
      if (!user){
        return res.status(404).json({ error: 'User not found' });
      } 

      const userDataToSend = {
        username: user.username,
        email: user.email,
        role: user.role,
        experience1: user.experience1,
        experience2: user.experience2,
        skill1: user.skill1,
        skill2: user.skill2,
        skill3: user.skill3,
        skill4: user.skill4,
        messages: user.messages,
        // Add other relevant user properties
      };
  
      res.json(userDataToSend);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const myProfile =  async(req, res) => {
    try {
     
      const userId = req.params.userId;
      const user = await Users.findById(userId);
  
      if (!user){
        return res.status(404).json({ error: 'User not found' });
      } 

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


const sendMessage= async(req, res) => {
  try {
    const { receiverId, senderId, sender, content } = req.body;
    console.log(req.body);
  
    // Assuming you have the sender's and receiver's IDs, you can use them to update their respective message arrays
    const senderUser = await Users.findOneAndUpdate(
      { _id: senderId },
      { $push: { messages: { content, timestamp: new Date() } } },
      { new: true }
    );
  
    const receiverUser = await Users.findOneAndUpdate(
      { _id: receiverId },
      { $push: { messages: {sender, senderId, content, timestamp: new Date() } } },
      { new: true }
    );
  
    if (!senderUser || !receiverUser) {
      return res.status(404).json({ message: 'Sender or receiver not found' });
    }
  
    res.status(200).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
  };
  module.exports = {UserProfile,myProfile,sendMessage};