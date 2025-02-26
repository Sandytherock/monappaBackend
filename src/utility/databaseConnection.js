import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const databaseConnection = async () => {
  try {
    const databaseConnection = await mongoose.connect(
      `${process.env.DATABASE_URL}`
    );

    if (databaseConnection) {
      console.log(
        "Database is successfully connected to host " +
          databaseConnection.connection.host
      );
    }
  } catch (error) {
    console.log(
      "Something went wrong while connecting database.",
      error.message
    );
  }
};
