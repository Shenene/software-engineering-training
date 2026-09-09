import express from "express";
import externalPostRoutes from "./routes/externalPostRoutes.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/api/external-posts", externalPostRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
