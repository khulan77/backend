import mongoose, { models, Schema } from "mongoose";

export const foodCartSchema = new Schema({
  foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: String, default: 1 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const foodCartMOdel =
  models["FoodCart"] || mongoose.model("FoodCart", foodCartSchema);
