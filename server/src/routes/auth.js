import express from "express";
import { login, register } from "../controller/auth.js";
const router = express.Router();
router.post("/login", login);
router.post("/register", register);
router.post("logout");

export default router;
