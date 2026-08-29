"use strict";

// -------------------------------------------------------- //
// ⁡⁣⁣⁢server.js⁡
// -------------------------------------------------------- //

import express from "express";
import "dotenv/config";
import sequelize from "./config/database.js";

// ----------------------------------------------------- //

const app = express();

const PORT = process.env.PORT || 3000;

// -------------------------------------------

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Quakelog NZ API is running",
  });
});

const startServer = async () => {
  try {
    await sequelize.authenticate();

    console.log("Connected to MySQL successfully.");

    // -------------------------------------------

    app.listen(PORT, () => {
      console.log(`Quakelog NZ API is running on http://localhost${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to MySQL:", error.message);
  }
};

// ----------------------------------------------------- //

startServer();
