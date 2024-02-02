import express from "express";
import config from "./config.js";
import addDb from "./middleware/addDb.js";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(addDb);
app.use(router);

app.listen(config.serverPort, () => {
  console.log(`Server is running in port ${config.serverPort}`);
});
