import { Router } from "express";
import * as userController from "./controller/user.js";
import auth from "../../middleware/auth.js";
const router = Router();

router.get("/", userController.getUsers);
router.get("/profile", auth, userController.profile);

router.put("/", userController.updateUsers);
router.delete("/", userController.deleteUsers);

export default router;
