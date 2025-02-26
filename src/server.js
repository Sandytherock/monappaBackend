import express from "express";
import { config } from "dotenv";
config();
import cors from "cors";
import { databaseConnection } from "./utility/databaseConnection.js";
import BookRouter from "./routes/bookdetails.routes.js";

const app = express();
const PORT = process.env.PORT || 8906;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: [`${process.env.FRONTEND_URL}`],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use("/api/books", BookRouter);

databaseConnection();
app.listen(PORT, () => {
  console.log("Server is running on port no. " + PORT);
});
