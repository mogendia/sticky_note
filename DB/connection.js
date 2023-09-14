<<<<<<< HEAD
import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DB_LOCAL)
    .then((result) => {
      console.log("its connected");
      // console.log(result);
    })
    .catch((err) => console.log(`catch error  ${err}`));
};

export default connectDB;
=======
import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DB_LOCAL)
    .then((result) => {
      console.log("its connected");
      // console.log(result);
    })
    .catch((err) => console.log(`catch error  ${err}`));
};

export default connectDB;
>>>>>>> 77642607d29753be27e090e9057fa53c784eddb1
