import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    salary: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userSchema);

export default userModel;
