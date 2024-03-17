const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passowrdComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passowrd: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().required().label("Name"),
    email: joi.string().required().label("email"),
    passowrd: passowrdComplexity.string().required().label("passowrd"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
