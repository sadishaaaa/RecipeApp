import pkg from "pg";
import config from "./config.js";
const { Pool } = pkg;
const connectdb = new Pool({
  user: config.database.user,
  host: config.database.host,
  database: config.database.database,
  password: config.database.password,
  port: config.database.port,
});

connectdb
  .connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

export default connectdb;
