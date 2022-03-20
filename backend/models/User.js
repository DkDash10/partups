import mongoose from "mongoose";
// const { Schema } = mongoose;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
  },
  profilepic: {
    type: String,
    required: false,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8MYTIuevVmECOFAAQMaQDCsR8FIDBW_anA&usqp=CAU",
  },
  age: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  mainskill: {
    type: String,
    // required: true,
  },
  bio: {
    type: String,
    // required: false,
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
