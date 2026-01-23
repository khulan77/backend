import { Schema, model, models } from "mongoose";

const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true },
);
export const FoodModel = models["Food"] || model("Food", FoodSchema);
