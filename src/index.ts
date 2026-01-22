import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import router from "./routers";
import "./mongodb";

configDotenv();

const app = express();

app.use(cors());
app.use(express.json());

// 🔴 ЭНЭ МӨР БАЙХ ЁСТОЙ
app.use("/api", router);

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
