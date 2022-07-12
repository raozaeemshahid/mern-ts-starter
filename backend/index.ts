import express from "express";
import dotenv from "dotenv";
import { conncetDB } from "./config/db";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
})

const startServer = async () => {
  await conncetDB();

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log(`Server is up and running at port ${PORT}`));
};

startServer()