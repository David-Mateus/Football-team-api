const express = require("express");
const router = express.Router();
const {getFootball, createFootball, deleteFootball} = require('./controllers/FootballController');

router.get('/football', getFootball);
router.post('/football', createFootball)
router.delete('/football/:id', deleteFootball)
module.exports = router;