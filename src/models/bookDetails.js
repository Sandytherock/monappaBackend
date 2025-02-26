import { Schema, model } from "mongoose";

const bookDetailSchema = new Schema({
  imag_url: {
    type: String,
  },
  firstSection: {
    headings: {
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      info: {
        type: String,
      },
    },
  },
  hardcovers: [
    {
      siteName: String,
      link: String,
    },
  ],
  ebooks: [
    {
      siteName: String,
      link: String,
    },
  ],

  aboutTheBook: [{ type: String }],
  bookDetails: {
    ASIN: String,
    Publisher: String,
    Language: String,
    Pages: String,
    ISBN10: String,
    ISBN13: String,
    Country: String,
    dimensions: {
      width: String,
      height: String,
      length: String,
    },
  },
  aboutAuthors: [
    {
      authors_image: {
        type: String,
      },
      author_name: {
        type: String,
      },
      author_details: [
        {
          type: String,
        },
      ],
    },
  ],

  reviews: [
    {
      text:String,
      reviewer_Name: String,
    },
  ],
});

export const BookDetails = model("BookDetails", bookDetailSchema);
