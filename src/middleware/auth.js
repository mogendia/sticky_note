<<<<<<< HEAD
import userModel from "../../DB/model/User.model.js";
import { verifyToken } from "../utils/GenerateAndVerify.js";
import { asyncHandler } from "../utils/errorHandling.js";

const auth = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  console.log({ authorization });
  console.log(authorization?.startsWith(process.env.BEARER_KEY));
  if (!authorization?.startsWith(process.env.BEARER_KEY)) {
    return res.json({ message: `in-valid ${process.env.BEARER_KEY}` });
  }
  const token = authorization.split(process.env.BEARER_KEY)[1];
  console.log({ token });
  if (!token) {
    return res.json({ message: "Token Required" });
  }
  const decoded = verifyToken({ token });
  console.log(decoded);
  if (!decoded?.id || decoded?.isLoggedIn) {
    return res.json({ message: "in-valid token payload" });
  }
  const authUser = await userModel
    .findById(decoded.id)
    .select("userName email role");
  if (!authUser) {
    return res.json({ message: "acc does not registered" });
  }
  req.user = authUser;
  return next();
});

export default auth;
=======
import userModel from "../../DB/model/User.model.js";
import { verifyToken } from "../utils/GenerateAndVerify.js";

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log({ authorization });
    console.log(authorization?.startsWith(process.env.BEARER_KEY));
    if (!authorization?.startsWith(process.env.BEARER_KEY)) {
      return res.json({ message: `in-valid ${process.env.BEARER_KEY}` });
    }
    const token = authorization.split(process.env.BEARER_KEY)[1];
    console.log({ token });
    if (!token) {
      return res.json({ message: "Token Required" });
    }
    const decoded = verifyToken({ token });
    console.log(decoded);
    if (!decoded?.id || decoded?.isLoggedIn) {
      return res.json({ message: "in-valid token payload" });
    }
    const authUser = await userModel
      .findById(decoded.id)
      .select("userName email role");
    if (!authUser) {
      return res.json({ message: "acc does not registered" });
    }
    req.user = authUser;
    return next();
  } catch (error) {
    return res.json({ message: "catch error", error });
  }
};

export default auth;
>>>>>>> 77642607d29753be27e090e9057fa53c784eddb1
