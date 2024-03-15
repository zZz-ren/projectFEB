const express = require("express");
const productRoutes = require("./Routes/productRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

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
