const express = require('express')

const router = express.Router();
const productControllers = require('../Controllers/productControllers')

router.get('/', productControllers.getAllProducts)

router.get('/:id', productControllers.getSingleProduct)

router.post('/', productControllers.createProduct)

router.post('/:id', productControllers.updateProduct)

module.exports = router