const express = require('express')

const router = express.Router();
const productControllers = require('../Controllers/productControllers')
const admincontrollers = require('../Controllers/adminControllers')

// for route '/product'
router.get('/', productControllers.getAllProducts)

router.get('/category', productControllers.getAllCategory)

router.get('/:id', productControllers.getSingleProduct)

router.post('/', productControllers.createProduct)

router.post('/:id', productControllers.updateProduct)

router.post('/adminInsert/', admincontrollers.addManyProduct)
module.exports = router