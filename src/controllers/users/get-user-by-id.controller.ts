import { Request, Response } from "express";

export const getUserByIdAndPost = async (req: Request, res: Response) => {
  try {
    res.status(200).send(req.params);
  } catch (error) {
    console.error(error);
  }
};

export const getUserByIdAndGet = async (_req: Request, _res: Response) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
