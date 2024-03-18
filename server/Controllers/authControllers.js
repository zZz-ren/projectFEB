const mongoose = require("mongoose");
const { User } = require("../Models/userModel");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

exports.User = async (req, res) => {
  console.log(req.body);
  try {
    const { error } = validate(req.body);

    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      res.status(401).send({ message: "invalid email or password" });
    }

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "logged in successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "internal server error" });
  }
};

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().label("email"),
    passowrd: passwordComplexity(undefined, "password"),
  }).unknown(true);
  return schema.validate(data);
};
