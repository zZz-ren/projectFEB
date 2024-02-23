const mongoose = require('mongoose');
const Product = require('../Models/productModel')

class CustomError extends Error {
    constructor(message, statuscode) {
        super(message)
        this.message = message
        this.statuscode = statuscode
    }
}

exports.addManyProduct = async (req, res) => {
    try {
        console.log('helo');
        const products = req.body
        const data = await Product.insertMany(products).then(() => console.log('inserted'))
        res.json({ data: data, message: 'success' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}