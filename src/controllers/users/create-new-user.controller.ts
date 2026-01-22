import { Request, Response } from "express";
import { UserModel } from "../../models/user.models";

export const createNewUser = async (req: Request, res: Response) => {
  try {
    await UserModel.create(req.body);
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
