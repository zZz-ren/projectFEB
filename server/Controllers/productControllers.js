const mongoose = require("mongoose");
const Product = require("../Models/productModel");

class CustomError extends Error {
  constructor(message, statuscode) {
    super(message);
    this.message = message;
    this.statuscode = statuscode;
  }
}

exports.getAllProducts = async (req, res) => {
  try {
    const queries = req.query;
    const products = await Product.find(queries);
    res.status(200).json({ products: products, message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Product.find({}, { _id: 0 }).distinct("category");
    res.status(200).json({ data: categories, message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid product ID", 400);
    }
    const product = await Product.findOne({ _id: id });
    if (!product) {
      res.json({ message: "Product not found" });
      return;
    }
    res.json({ product: product, message: "success" });
  } catch (error) {
    res.status(error.statuscode).json({ message: error.message });
  }
};

// exports.findbyMisc = async (req, res) => {
//     try {

//     } catch (error) {
//         res.status(error.statuscode).json({ message: error.message })
//     }
// }
