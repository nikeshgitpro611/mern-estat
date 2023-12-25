import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
const app = express();
dotenv.config();


// app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("mongoose Connected!"))
  .catch((err) => console.log(err));

app.use(express.json());

app.listen(3000, () => {
  console.log("Hey , Server connected...");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
