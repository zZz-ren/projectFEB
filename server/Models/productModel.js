const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    variants: [
        {
            name: String,
            price: String,
            features: [{ name: String, value: String }]
        }
    ],
    category: {
        type: String,
        required: true
    },
    imageUrl: String,
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

module.exports = Product;