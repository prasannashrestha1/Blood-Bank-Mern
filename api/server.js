import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//dot config
dotenv.config();

//rest object
const app = express();

//routes
//test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to blood bank app",
  });
});

app.use();

//port
const PORT = 8080;

//listen
app.listen(PORT, () => {
  try {
    console.log(`Node js running in ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
