const express = require('express')

const router = express.Router();
const productControllers = require('../Controllers/productControllers')

// for route '/product'
router.get('/', productControllers.getAllProducts)

router.get('/category', productControllers.getAllCategory)

router.get('/:id', productControllers.getSingleProduct)

module.exports = router