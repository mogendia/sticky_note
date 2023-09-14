import userModel from "../../../../DB/model/User.model.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const getUsers = asyncHandler(async (req, res, next) => {
  const user = await userModel.find({});
  return res.json({ message: "Done", user });
});

export const profile = asyncHandler(async (req, res, next) => {
  console.log({ user: req.user });
  const user = await userModel.findById(req.user._id);
  return res.json({
    message: "user module ",
    user,
  });
});

export const updateUsers = asyncHandler(async (req, res, next) => {
  const { token } = req.headers;
  console.log({ token });
  if (!token) {
    return res.json({ message: "Token Required" });
  }
  const decoded = jwt.verify(token, process.env.TOKEN_SIGNATURE);
  console.log(decoded);
  // if i want to don't back any value i have to do (select(- value)) its was 1 value
  // if i want to don't back any value i have to do (select(- value  -value)) more than 1
  const user = await userModel
    .findByIdAndUpdate(decoded.id, req.body, { new: true })
    .select("-password");

  return user
    ? res.json({ message: "Done", user })
    : res.json({ message: "In Valid User Id" });
});

export const deleteUsers = asyncHandler(async (req, res, next) => {
  const { token } = req.headers;
  console.log({ token });
  if (!token) {
    return res.json({ message: "Token Required" });
  }
  const decoded = jwt.verify(token, process.env.TOKEN_SIGNATURE);
  console.log(decoded);
  const user = await userModel.findByIdAndDelete(decoded.id);
  return res.json({ message: "done", user });
});
