import express from "express";
import dotenv from "dotenv";
dotenv.config();
import initApp from "./src/app.router.js";
const app = express();
const port = process.env.port;

console.log({ DB: process.env.DB_LOCAL });

initApp(app, express);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
