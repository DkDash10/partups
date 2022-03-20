import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from "../models/User.js";

const secret = 'MAIhuEKudtaROBO';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, username, age, gender, mainskill, bio } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ email, password: hashedPassword, username, age, gender, mainskill, bio });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const updateUserProfile = async (req, res) => {
  const { username, age, gender, bio, mainskill, profilepic}= req.body;
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.age = req.body.age || user.age;
    user.gender = req.body.gender || user.gender;
    user.mainskill = req.body.mainskill || user.mainskill;
    user.bio = req.body.bio || user.bio;
    user.profilepic = req.body.profilepic || user.profilepic;
    // user.profilepic = req.body.profilepic || user.profilepic;
    // user.email = req.body.email || user.email;
    // if (req.body.password) {
    //   user.password = req.body.password;
    // }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      age: updatedUser.age,
      profilepic: updatedUser.profilepic,
      bio: updatedUser.bio,
      mainskill : updatedUser.mainskill,
      gender: updatedUser.gender,
      // email: updatedUser.email,
      // password:
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
};