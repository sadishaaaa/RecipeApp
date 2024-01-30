// middleware.js
import connectdb from "../connect.js";

const addDb = (req, res, next) => {
  req.db = connectdb;
  next();
};

export default addDb;
