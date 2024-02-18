import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import { checktoken } from "../controller/user.js";

const router = express.Router();
router.get("/me", auth, checktoken);
export default router;
