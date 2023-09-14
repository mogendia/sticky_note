<<<<<<< HEAD
import { Router } from "express";
import * as noteController from "./controller/note.js";
const router = Router();

router.get("/", noteController.getNoteModule);
router.post("/", noteController.addNote);

export default router;
=======
import { Router } from "express";
import * as noteController from "./controller/note.js";
const router = Router();

router.get("/", noteController.getNoteModule);
router.post("/", noteController.addNote);

export default router;
>>>>>>> 77642607d29753be27e090e9057fa53c784eddb1
