const express = require("express");
const productRoutes = require("./Routes/productRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const authRoutes = require("./Routes/authRoutes");
const userRoutes = require("./Routes/userRoutes");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT, () => {
      console.log("server started on port " + process.env.PORT);
    })
  )
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/product", productRoutes);
app.use("/admin", adminRoutes);
app.use("/profile", authRoutes);
app.use("/profile", userRoutes);
