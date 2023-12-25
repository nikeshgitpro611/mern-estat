import User from "../modal/users.modal.js";
import bycrypt from "bcrypt";

export const signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const hasedPassword = bycrypt.hashSync(password, 10);
  console.log("hasedPassword", hasedPassword);
  // res.send('Hello Auth Router')
  const newUser = new User({ username, email, password : hasedPassword});

  try {
    await newUser.save();
    res.status(200).json("user created sucessfully");
    
  } catch (error) {
    res.status(500).json(error.message)
  }
};
