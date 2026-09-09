import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error: " + error.message);
  }
};

export default connectDB;
