import { Router } from "express";
import authRoutes from "./auth.js";
import userRoutes from "./users.js";

const router = Router();
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
export default router;
