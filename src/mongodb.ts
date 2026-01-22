import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://dhulan174_db_user:SnshILoPt6VoEK2v@cluster0.2tdffr1.mongodb.net/`,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToMongoDB;
