import express from "express";
// Import Swagger UI and the swagger.json document.
// Swagger UI displays the API documentation at /api-docs.
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" with { type: "json" };

import calculatorRoutes from "./routes/calculatorRoutes.js";
import productRoutes from "./routes/productRoutes.js";

// -------------------------------------------------------------------------------

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/calculator", calculatorRoutes);
app.use("/api/products", productRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("API is running. Swagger docs at /api-docs.");
});

export default app;
