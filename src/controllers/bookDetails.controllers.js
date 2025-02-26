import { BookDetails } from "../models/bookDetails.js";

export async function addBookDetails(req, res) {
  try {
    const response = await BookDetails.create(req.body);
    return res.status(200).json({ messag: "got data", data: response });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while adding book details" });
  }
}

export async function getAllBooks(req, res) {
  try {
    const response = await BookDetails.find().select(
      "firstSection bookDetails aboutAuthors"
    );

    return res.status(200).json({ messag: "got data", data: response });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while adding book details" });
  }
}

export async function getOneBook(req, res) {
  try {
    const { Id } = req.params;
    const response = await BookDetails.findById(Id);
    return res.status(200).json({ messag: "got data", data: response });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while getting book details" });
  }
}
