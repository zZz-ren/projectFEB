const mongoose = require('mongoose');
const Product = require('../Models/productModel')

class CustomError extends Error {
    constructor(message, statuscode) {
        super(message)
        this.message = message
        this.statuscode = statuscode
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const queries = req.query
        const products = await Product.find(queries);
        res.status(200).json({ products: products, message: 'success' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new CustomError("Invalid product ID", 400)
        }
        const product = await Product.findOne({ _id: id })
        if (!product) {
            res.json({ message: 'Product not found' })
            return
        }
        res.json({ product: product, message: 'success' })
    } catch (error) {
        res.status(error.statuscode).json({ message: error.message })
    }
}

// exports.findbyMisc = async (req, res) => {
//     try {

//     } catch (error) {
//         res.status(error.statuscode).json({ message: error.message })
//     }
// }

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new CustomError("Invalid id", 400)
        }
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.json({ product: product, message: "Product updated successfully" })
    } catch (error) {
        console.log(error);
        res.status(error.statuscode).json({ message: error.message })
    }
}

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.addMany = async (req, res) => {
    try {
        console.log('helo');
        const products = [
            {
                name: "Laptop",
                brand: "Dell",
                description: "Powerful laptop for work and entertainment.",
                price: 1200,
                variants: [
                    {
                        name: "Laptop 15 inch",
                        price: "1200",
                        features: [
                            { name: "Processor", value: "Intel Core i7" },
                            { name: "RAM", value: "16GB" },
                            { name: "Storage", value: "512GB SSD" }
                        ]
                    },
                    {
                        name: "Laptop 17 inch",
                        price: "1400",
                        features: [
                            { name: "Processor", value: "Intel Core i9" },
                            { name: "RAM", value: "32GB" },
                            { name: "Storage", value: "1TB SSD" }
                        ]
                    }
                ],
                category: "Electronics"
            },
            {
                name: "Smartphone",
                brand: "Samsung",
                description: "High-performance smartphone with stunning display.",
                price: 999,
                variants: [
                    {
                        name: "Samsung Galaxy S22",
                        price: "999",
                        features: [
                            { name: "Display", value: "6.5 inch Super AMOLED" },
                            { name: "Processor", value: "Snapdragon 8 Gen 2" },
                            { name: "Camera", value: "Triple 50MP+12MP+12MP" }
                        ]
                    },
                    {
                        name: "Samsung Galaxy S22 Ultra",
                        price: "1299",
                        features: [
                            { name: "Display", value: "6.8 inch Dynamic AMOLED" },
                            { name: "Processor", value: "Exynos 2200" },
                            { name: "Camera", value: "Quad 108MP+12MP+10MP+10MP" }
                        ]
                    }
                ],
                category: "Electronics"
            },
            {
                name: "Headphones",
                brand: "Sony",
                description: "Immerse yourself in music with high-quality headphones.",
                price: 199,
                variants: [
                    {
                        name: "Sony WH-1000XM4",
                        price: "199",
                        features: [
                            { name: "Type", value: "Over-ear" },
                            { name: "Noise Cancelling", value: "Yes" },
                            { name: "Battery Life", value: "Up to 30 hours" }
                        ]
                    },
                    {
                        name: "Sony WF-1000XM4",
                        price: "249",
                        features: [
                            { name: "Type", value: "True wireless earbuds" },
                            { name: "Noise Cancelling", value: "Yes" },
                            { name: "Battery Life", value: "Up to 24 hours" }
                        ]
                    }
                ],
                category: "Electronics"
            },
            {
                name: "Watch",
                brand: "Apple",
                description: "Stay connected and monitor your health with a smartwatch.",
                price: 399,
                variants: [
                    {
                        name: "Apple Watch Series 7",
                        price: "399",
                        features: [
                            { name: "Display", value: "Always-On Retina display" },
                            { name: "Health", value: "ECG, Blood Oxygen, Heart Rate" },
                            { name: "Water Resistance", value: "50 meters" }
                        ]
                    },
                    {
                        name: "Apple Watch SE",
                        price: "279",
                        features: [
                            { name: "Display", value: "Retina display" },
                            { name: "Health", value: "Heart Rate, Sleep Tracking" },
                            { name: "Water Resistance", value: "50 meters" }
                        ]
                    }
                ],
                category: "Electronics"
            },
            {
                name: "Camera",
                brand: "Canon",
                description: "Capture your memories with professional-grade photography equipment.",
                price: 1499,
                variants: [
                    {
                        name: "Canon EOS R5",
                        price: "1499",
                        features: [
                            { name: "Sensor", value: "45MP Full-Frame CMOS" },
                            { name: "Video", value: "8K RAW, 4K up to 120fps" },
                            { name: "Autofocus", value: "Dual Pixel CMOS AF II" }
                        ]
                    },
                    {
                        name: "Canon EOS RP",
                        price: "999",
                        features: [
                            { name: "Sensor", value: "26.2MP Full-Frame CMOS" },
                            { name: "Video", value: "4K up to 24fps" },
                            { name: "Autofocus", value: "Dual Pixel CMOS AF" }
                        ]
                    }
                ],
                category: "Electronics"
            },
            // Add more products here...
        ];
        const data = await Product.insertMany(products).then(() => console.log('inserted'))

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}