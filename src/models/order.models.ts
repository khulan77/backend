import { Schema, model, Types } from "mongoose";

const OrderSchema = new Schema(
  {
    items: [
      {
        food: { type: Types.ObjectId, ref: "Food", required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export const OrderModel = model("Order", OrderSchema);
