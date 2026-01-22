import { Router } from "express";
import {
  createNewUser,
  getUserByIdAndPost,
  getUserByIdAndGet,
} from "../controllers";

export const userRouter = Router();

userRouter.post("/create-user", createNewUser);

userRouter.post(
  "/get-user-by-post-request/:groupId/:userId/",
  getUserByIdAndPost,
);

userRouter.get("/get-user-by-get-request/:groupId/:userId/", getUserByIdAndGet);
// userRouter.delete("./user", createNewUser);
// userRouter.route("/user").post(createNewUser).delete(createNewUser);
// userRouter.get("/health-check", createNewUser);
