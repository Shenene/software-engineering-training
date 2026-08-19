import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aiRoutes from "./routes/aiRoutes.js";
import knowledgeRoutes from "./routes/knowledgeRoutes.js";

// ---------------------------------- //

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------------------------- //

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/api/ai", aiRoutes);

app.use("/api/knowledge", knowledgeRoutes);

app.get("/", (req, res) => {
  res.send("InspectWise server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
