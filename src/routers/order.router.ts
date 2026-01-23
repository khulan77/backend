import { Router, Request, Response } from "express";
import { OrderModel } from "../models";
// import { FoodModel } from "../controllers";
const router = Router();

// router.post("/", async (req: Request, res: Response) => {
//   try {
//     const { items } = req.body;

//     let totalPrice = 0;

//     for (const item of items) {
//       const food = await FoodModel.findById(item.food);
//       if (!food) {
//         return res.status(404).json({ message: "Food not found" });
//       }
//       totalPrice += food.price * item.quantity;
//     }

//     const order = await OrderModel.create({
//       items,
//       totalPrice,
//     });

//     return res.status(201).json(order);
//   } catch (error) {
//     return res.status(500).json({ message: "Order create failed", error });
//   }
// });

router.get("/", async (_req: Request, res: Response) => {
  const orders = await OrderModel.find().populate("items.food");
  return res.json(orders);
});

router.get("/:id", async (req: Request, res: Response) => {
  const order = await OrderModel.findById(req.params["id"]).populate(
    "items.food",
  );

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  return res.json(order);
});

router.put("/:id", async (req: Request, res: Response) => {
  const { status } = req.body;

  const order = await OrderModel.findByIdAndUpdate(
    req.params["id"],
    { status },
    { new: true },
  );

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  return res.json(order);
});

export default router;
