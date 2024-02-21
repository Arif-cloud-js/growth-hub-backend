const express = require('express');
const router = express.Router();
const PostIdea = require('..//Models/PostIdea')


const GetIdeas =  async(req, res) => {
  try {
    const Ideas = await PostIdea.find();
    res.json(Ideas);
  } catch (error) {
    console.error('Error fetching Ideas:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
 };
 const PostIdeas =  async(req, res) => {
    const { category, market, shortdes, requiredamount, postedUserId } = req.body;
    if (!category || !market || !shortdes || !requiredamount || !postedUserId) {
      res.json({ error: "plzz fill all the fields..." });
    }
    const newpostidea = new PostIdea({ category, market, shortdes, requiredamount, postedUserId });
    await newpostidea.save();
    res.json({ message:  'Posted Successfully' });
 
};
const getIdeasByUser = async (req, res) => {
  const postedUserId = req.params.userId;

  try {
    const ideas = await PostIdea.find({ postedUserId }).sort({ createdAt: -1 });
    res.json(ideas);
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const sendInterest = async (req, res) => {
  try {
    const { ideaId, senderId, messageInput } = req.body;
   console.log(req.body)
    // Find the idea by ID
    const idea = await PostIdea.findById(ideaId);

    if (!idea) {
      return res.status(404).json({ success: false, message: 'Idea not found' });
    }

    idea.interests.push({
      senderId,
      messageInput,
      timestamp: new Date(),
    });

    // Save the updated idea document
    await idea.save();

    res.status(200).json({ success: true, message: 'Interest saved successfully' });
  } catch (error) {
    console.error('Error saving interest:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
const getTotalInterestsForAllIdeas = async (req, res) => {
  try {
    // Find all ideas
    const ideas = await PostIdea.find();

    // Calculate the total interests for all ideas
    const totalInterests = ideas.reduce((total, idea) => total + idea.interests.length, 0);

    res.status(200).json({ success: true, totalInterests });
  } catch (error) {
    console.error('Error getting total interests for all ideas:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};



 module.exports = {PostIdeas,GetIdeas,getIdeasByUser,sendInterest,getTotalInterestsForAllIdeas};