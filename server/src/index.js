import express from "express";
import config from "./config.js";
import connectdb from "./connect.js";
import addDb from "./middleware/addDb.js";

const app = express();
app.use(express.json());
app.use(addDb);

app.listen(config.serverPort, () => {
  console.log(`Server is running in port ${config.serverPort}`);
});
