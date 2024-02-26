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

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new CustomError("Invalid id", 400)
        }
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.json({ product: product, message: "Product updated successfully" })
    } catch (error) {
        res.status(error.statuscode).json({ message: error.message })
    }
}

exports.createProduct = async (req, res) => {
    try {
        // const product = new Product(req.body);
        // await product.save();
        console.log(req.body);
        res.status(201).json(req.file)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Product.deleteOne({ _id: id })
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message })
    }
}
