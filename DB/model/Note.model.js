<<<<<<< HEAD
import { Schema, model, Types } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const noteModel = model("Note", noteSchema);
export default noteModel;
=======
import { Schema, model, Types } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const noteModel = model("Note", noteSchema);
export default noteModel;
>>>>>>> 77642607d29753be27e090e9057fa53c784eddb1
