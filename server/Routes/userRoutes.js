const express = require("express");

const router = express.Router();
const userControllers = require("../Controllers/userControllers");

router.post("/newuser", userControllers.createUser);

module.exports = router;
