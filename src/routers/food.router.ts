import { Router, Request, Response } from "express";
import { FoodModel } from "../controllers";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  console.log("🔥 FOOD ROUTE HIT");
  console.log(req.body);

  const food = await FoodModel.create(req.body);
  res.status(201).json(food);
});

export default router;
