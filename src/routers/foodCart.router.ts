import { Request, Response } from "express";
import { foodCartMOdel } from "../controllers";

export const createFoodCart = async (req: Response, res: Response) => {
  const { foodId, quantity } = req.body;
  const foodCart = await foodCartMOdel.create({ foodId, quantity });
  res
    .status(200)
    .send({ message: "food cart created successfully", data: foodCart });
};
