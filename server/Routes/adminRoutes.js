const express = require('express')

const router = express.Router();
const admincontrollers = require('../Controllers/admincontrollers')

router.post('/addMany', admincontrollers.addManyProduct)

module.exports = router