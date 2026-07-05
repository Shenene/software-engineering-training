import express from "express";
import calculatorRoutes from "./routes/calculatorRoutes.js";

// ---------------------------------------- //

const app = express();
const port = 3000;

// ----------------------------------------

app.get("/", (req, res) => {
  res.send("Calculator API is running. Try /calculator/add?num1=5&num2=4");
});

// ----------------------------------------

// Use calculator routes
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Calculator server running at http://localhost:${port}`);
});
