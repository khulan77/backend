import { Router } from "express";
import foodRouter from "./food.router";
import orderRouter from "./order.router";

const router = Router();
router.use("/foods", foodRouter);
router.use("/orders", orderRouter);

export default router;
