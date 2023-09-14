import { Router } from "express";
import * as authController from "./controller/auth.js";
import validation from "../../middleware/validation.js";
import * as validators from "./auth.validation.js";
const router = Router();

router.get("/", authController.getAuthModule);
router.post(
  "/signup",
  validation(validators.signupSchema),
  authController.signup
);
router.post("/login", validation(validators.loginSchema), authController.login);

export default router;
