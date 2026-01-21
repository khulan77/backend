import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const mongoUri = process.env["MONGODB_CONNECTION_STRING"];

    if (!mongoUri) {
      throw new Error("MONGODB_CONNECTION_STRING is not defined");
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToMongoDB;
