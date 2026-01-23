import { Router, Request, Response } from "express";
import { FoodModel } from "../controllers";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  try {
    const savedFoods = await FoodModel.create({ name, description, price });
    res.status(201).json(savedFoods);
  } catch (error) {
    res.status(201).json(error);
  }
});

// GET /api/foods
router.get("/gat", async (_req: Request, res: Response) => {
  const foods = await FoodModel.find();
  res.status(200).json(foods);
});

// PUT /api/foods/:id
router.put("/update-by-name/:id", async (req, res) => {
  const { id } = req.params;
  const { price, name } = req.body;

  const food = await FoodModel.findByIdAndUpdate(
    id,
    {
      price,
      name,
    },
    { new: true },
  );

  if (!food) {
    return res.status(200).json({ message: "Food not found" });
  }

  return res.json(food);
});

router.delete("food-deleted", (req: Request, res: Response) => {
  const foods = req.body;
  res.status(201).send({ message: "food deleted" });
});

export default router;
