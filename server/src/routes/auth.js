import express from "express";
import { register, userDetails } from "../controller/users.js";
const router = express.Router();
router.post("login");
router.post("/register", register);
router.post("/userDetails", userDetails);
router.post("logout");

export default router;
