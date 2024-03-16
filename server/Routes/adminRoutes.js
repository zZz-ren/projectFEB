const express = require("express");

const router = express.Router();
const admincontrollers = require("../Controllers/admincontrollers");

const upload = require("../upload");

// router.post('/addMany', admincontrollers.addManyProduct)

// router.post('/upload', admincontrollers.addNewProduct);

router.post(
  "/newProduct",
  upload.array("image", 5),
  admincontrollers.createProduct
);

router.post(
  "/update/:id",
  upload.array("image", 5),
  admincontrollers.updateProduct
);

router.delete(
  "/update/:id",
  upload.array("image", 5),
  admincontrollers.deleteProduct
);

router.post("/adminInsert/", admincontrollers.addManyProduct);

module.exports = router;
