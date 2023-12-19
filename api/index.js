const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("mongoose Connected!"))
  .catch((err) => console.log(err));
  
app.listen(3000, () => {
  console.log("Hey , Server connected...");
});
