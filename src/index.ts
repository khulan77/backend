import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
import connectToMongoDB from "./mongodb";

configDotenv();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
//create a post endpoint//
app.post("/discovery", (_req: Request, res: Response) => {
  const user = {
    name: "John Doe",
    email: "dhulan77@gmail.com",
    age: 30,
  };

  res.send(user);
});

//update a put endpoint//
app.put("/update-user", (req: Request, res: Response) => {
  const newUser = req.body;

  const user = {
    name: "John Doe",
    email: "dhulan77@gmail.com",
    age: 30,
  };

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

// //write user find by id api// get request
// app.get("/getById", (req: Request, res: Response) => {
//   const userId = [
//     {
//       id: 1,
//       name: "khulan",
//     },
//     {
//       id: 2,
//       name: "sanjaa",
//     },
//     {
//       id: 3,
//       name: "bat",
//     },
//   ];

//   const user = userId.find((pp) => pp.id === Number(req.query.id));
//   if (!user) {
//     return res.status(200).send({ message: "User found", data: user });
//   } else if (!user) {
//     return res.status(404).send({ message: "User not found" });
//   }
// });

app.listen(port, async() => {
  await connectToMongoDB();
  console.log("http://localhost:8000/");
});
