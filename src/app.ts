import express from "express";
import mongoose from "mongoose";

import { Routes } from "./routes/routes";
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose
  .connect("mongodb://localhost:27017/library")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const router = express.Router();
const routes = new Routes();
routes.initialize(router);

app.use("/", router);

export default app;
