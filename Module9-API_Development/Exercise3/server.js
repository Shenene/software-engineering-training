import express from "express";
import { connectDB } from "./dbConnect.js";
import "./models/index.js";

import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

await connectDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
