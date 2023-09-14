import noteModel from "../../../../DB/model/Note.model.js";
import userModel from "../../../../DB/model/User.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";

export const getNoteModule = async (req, res, next) => {
  // populate to show all users infos and select(- to remove value)

  const notes = await noteModel.find().populate({
    path: "userId",
    select: "-password",
  });
  return res.json({ message: "Done", notes });
};

export const addNote = asyncHandler(async (req, res, next) => {
  const { title, description, userId } = req.body;

  console.log({ title, description, userId });
  const user = await userModel.findById(userId);
  if (!user) {
    return res.json({ message: "invalid userId" });
  }
  const note = await noteModel.create({ title, description, userId });

  return res.json({ message: "Done ", note });
});
