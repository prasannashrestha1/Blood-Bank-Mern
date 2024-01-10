import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";

//dot config
dotenv.config();

//mongodb connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb succcessfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`Erorr in mongodb ${error}`);
  }
};
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan(`dev`));

//routes
app.use("/api/v1/auth", authRoute);

//port
const PORT = process.env.PORT;

//listen
app.listen(PORT, () => {
  try {
    console.log(`Node js running in ${process.env.DEV_MODE} port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
