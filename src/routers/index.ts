import { Router } from "express";
import foodRouter from "./food.router";

const router = Router();

// 🔴 foods (s-тэй)
router.use("/foods", foodRouter);

export default router;
