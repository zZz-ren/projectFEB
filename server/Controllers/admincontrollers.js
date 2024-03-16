const mongoose = require("mongoose");
const Product = require("../Models/productModel");

class CustomError extends Error {
  constructor(message, statuscode) {
    super(message);
    this.message = message;
    this.statuscode = statuscode;
  }
}

exports.addManyProduct = async (req, res) => {
  try {
    console.log("helo");
    const products = req.body;
    const data = await Product.insertMany(products).then(() =>
      console.log("inserted")
    );
    res.json({ data: data, message: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  console.log(req.files);
  try {
    const id = req.params.id;
    const { name, description, brand, price, category } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid id", 400);
    }
    const product = await Product.findOneAndUpdate(
      { _id: id },
      {
        name,
        description,
        brand,
        price,
        category,
        imageUrl: req.files.map((itm) => itm.path),
      },
      {
        new: true,
      }
    );
    res.json({ product: product, message: "Product updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, brand, price, category } = req.body;
    const product = new Product({
      name,
      description,
      brand,
      price,
      category,
      imageUrl: req.file.path,
    });
    await product.save();
    console.log(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

const dummydata = [
  {
    fieldname: "image",
    originalname: "grild sandwich.png",
    encoding: "7bit",
    mimetype: "image/png",
    destination: "./uploads",
    filename: "1710563336328_grild sandwich.png",
    path: "uploads\\1710563336328_grild sandwich.png",
    size: 178219,
  },
  {
    fieldname: "image",
    originalname: "Vanilla.png",
    encoding: "7bit",
    mimetype: "image/png",
    destination: "./uploads",
    filename: "1710563336333_Vanilla.png",
    path: "uploads\\1710563336333_Vanilla.png",
    size: 95223,
  },
  {
    fieldname: "image",
    originalname: "Mountain Dew Soft Drink 155ml.png",
    encoding: "7bit",
    mimetype: "image/png",
    destination: "./uploads",
    filename: "1710563336339_Mountain Dew Soft Drink 155ml.png",
    path: "uploads\\1710563336339_Mountain Dew Soft Drink 155ml.png",
    size: 92547,
  },
  {
    fieldname: "image",
    originalname: "Mini McRoyale.png",
    encoding: "7bit",
    mimetype: "image/png",
    destination: "./uploads",
    filename: "1710563336340_Mini McRoyale.png",
    path: "uploads\\1710563336340_Mini McRoyale.png",
    size: 64067,
  },
  {
    fieldname: "image",
    originalname: "masala fries.png",
    encoding: "7bit",
    mimetype: "image/png",
    destination: "./uploads",
    filename: "1710563336342_masala fries.png",
    path: "uploads\\1710563336342_masala fries.png",
    size: 214068,
  },
];
