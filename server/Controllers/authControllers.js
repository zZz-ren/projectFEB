const mongoose = require("mongoose");
const { User } = require("../Models/userModel");

exports.User = async (req, res) => {
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
      req.body.passowrd,
      user.passowrd
    );
    if (!validPassword) {
      res.status(401).send({ message: "invalid email or password" });
    }

    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

const validate = (data) => {
  const schema = joi.object({
    email: joi.string().required().label("email"),
    passowrd: passowrdComplexity.string().required().label("passowrd"),
  });
  return schema.validate(data);
};
