const express = require("express");

const router = express.Router();
const admincontrollers = require("../Controllers/admincontrollers");

const upload = require("../upload");

// router.post('/addMany', admincontrollers.addManyProduct)

// router.post('/upload', admincontrollers.addNewProduct);

router.post(
  "/newProduct",
  upload.single("image"),
  admincontrollers.createProduct
);

router.post(
  "/update/:id",
  upload.single("image"),
  admincontrollers.updateProduct
);

router.delete("/update/:id", admincontrollers.deleteProduct);

router.post("/adminInsert/", admincontrollers.addManyProduct);

module.exports = router;
