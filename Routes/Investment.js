const express = require('express');
const router = express.Router();
const {simple,postplans} =require('../Contollers/Investment')



router.get('/simple',simple);

module.exports = router;