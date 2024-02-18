import jwt from "jsonwebtoken";
import config from "../config.js";
export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new error("no acccess token");
    }
    const decode = jwt.verify(token, config.jwt.accessTokenSecret);
    req.user = decode;
    next();
  } catch (error) {
    res.json({
      success: false,
      message: "Authentication failed.",
    });
  }
};
