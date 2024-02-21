const express = require('express');
const router = express.Router();
const {GetIdeas,PostIdeas,getIdeasByUser,sendInterest ,getTotalInterestsForAllIdeas} =require('../Contollers/Business')



router.get('/othersideas',GetIdeas);
router.get('/get/:userId',getIdeasByUser);
router.get('/get-total',getTotalInterestsForAllIdeas);
router.post('/send-interest',sendInterest);
router.post('/postideas',PostIdeas);

module.exports = router;