import { Router } from "express";
import {
  addBookDetails,
  getAllBooks,
  getOneBook,
  searchBooks,
} from "../controllers/bookDetails.controllers.js";

const router = Router();

router.post("/addBookDetails", addBookDetails);

router.get("/getAllBooks", getAllBooks);

router.get("/getOneBooks/:Id", getOneBook);

router.get("/searchBooks/:search", searchBooks);

export default router;
