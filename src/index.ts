import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import router from "./routers";
import connectToMongoDB from "./mongodb";
import { Request, Response } from "express";

configDotenv();

const app = express();

connectToMongoDB();

app.use(cors());
app.use(express.json());
//create a post endpoint//
app.post("/discovery", (_req: Request, res: Response) => {
  const user = { name: "John Doe", email: "dhulan77@gmail.com", age: 30 };
  res.send(user);
});

//update a put endpoint//
app.put("/update-user", (req: Request, res: Response) => {
  const newUser = req.body;
  const user = { name: "John Doe", email: "dhulan77@gmail.com", age: 30 };
  const updateUser = { ...user, ...newUser };
  res.status(200).send({ message: "User updated", data: updateUser });
});

//delete a delete endpoint//
app.delete("/delete-user", (req: Request, res: Response) => {
  const userId = req.body.id;
  res.status(200).send({ message: "User deleted", id: userId });
});

//list a get endpoint//
app.get("/list-users", (_req: Request, res: Response) => {
  const users = [
    { id: 1, name: "John", email: "john@gmail.com" },
    { id: 2, name: "Sara", email: "sara@gmail.com" },
  ];
  res.status(200).send({ message: "Users listed", data: users });
});

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
