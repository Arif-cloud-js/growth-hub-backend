const express = require('express');
const router = express.Router();
const {UserProfile,myProfile,sendMessage,getTotalInterests} =require('..//Contollers/User')



router.get('/user-profile/:postedUserId',UserProfile);
router.get('/myprofile/:userId',myProfile);

router.post('/send-message',sendMessage);

module.exports = router;