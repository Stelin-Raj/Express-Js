const express = require('express')
const weatherController = require('../controllers/weatherController.js')

const router = express.Router();

router.post('/', weatherController);

module.exports = router;
