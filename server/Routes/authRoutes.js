const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authControllers");

router.post("/userlogin", authController.User);

module.exports = router;
