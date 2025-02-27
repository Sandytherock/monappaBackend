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

export async function searchBooks(req, res) {
  try {
    const { search } = req.params;

    if (!search) {
      return res.statue(404).json({ message: "no search found" });
    }

    const result = await BookDetails.find({
      "firstSection.headings.title": { $regex: `^${search}`, $options: "i" },
    });
    if (!result) {
      return res.statue(404).json({ message: "no search found" });
    }

    return res.status(200).json({ message: "got data", data: result });
  } catch (error) {
    return res
      .statue(500)
      .json({ message: "somtehing went wrong  while searching books" });
  }
}
