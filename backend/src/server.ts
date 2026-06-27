import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import articleRoutes from "./routes/artticleRoutes"

// get environment variables from .env file
dotenv.config();

const app = express(); // create an Express application
const PORT = process.env.PORT || 5000; // set the port for the server

// Middleware
// enable frontend to access backend APIs
app.use(cors());
// parse JSON request bodies
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/articles', articleRoutes);

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("🔥 MongoDB Connected Successfully!");

    // Database එක connect වුණාට පස්සේ සර්වර් එක start කරනවා
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("❌ MongoDB Connection Error:", error);
  });

// Basic route to test if the server is working
app.get("/", (req, res) => {
  res.send("MindBou API is running!");
});
