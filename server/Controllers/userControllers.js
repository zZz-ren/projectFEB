const mongoose = require("mongoose");
const { User, validate } = require("../Models/userModel");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.message });
    }

    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email is already exist" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};
