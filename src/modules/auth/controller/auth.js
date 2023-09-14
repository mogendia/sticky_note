import userModel from "../../../../DB/model/User.model.js";
import { compare, hash } from "../../../utils/HashAndCompare.js";
import { generateToken } from "../../../utils/GenerateAndVerify.js";
import { signupSchema } from "../auth.validation.js";
import { asyncHandler } from "../../../utils/errorHandling.js";
export const getAuthModule = (req, res, next) => {
  return res.json({ message: "Auth module" });
};

export const signup = asyncHandler(async (req, res, next) => {
  const { email, userName, password, cPassword } = req.body;
  console.log({ email, userName, password });

  if (password != cPassword) {
    return res.json({ message: "password not match cPassword" });
  }

  const checkUser = await userModel.findOne({ email });

  if (checkUser) {
    return res.json({ message: "Email Already Exist" });
  }
  const hashValue = hash({ plainText: "password" });
  const user = await userModel.create({
    email,
    userName,
    password: hashValue,
  });

  return res.json({ message: "done", user });
});
//  if i wanna back one value USE (select)
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  console.log({ email, password });

  const user = await userModel.findOne({ email });
  if (!user) {
    res.json({ message: "In-Valid Email" });
  }
  const match = compare({ plainText: "password", hashValue: user.password });
  console.log(match);
  if (!match) {
    return res.json({ message: "In-Valid Password" });
  }
  const token = generateToken({
    payLoad: { id: user._id, isLogged: true },
    expiresIn: 60 * 60 * 24 * 30,
  });
  res.json({ message: "done", token });
});
