import { Schema, model } from "mongoose";

const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
  },
  { timestamps: true },
);
export const FoodModel = model("Food", FoodSchema);
