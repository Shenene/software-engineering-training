"use strict";

// -------------------------------------------------------- //
// ⁡⁣⁢⁢earthquakeRoutes.js⁡⁡⁡⁡⁡
// -------------------------------------------------------- //

import express from "express";
import { importEarthquakes, createEarthquake, getAllEarthquakes, getEarthquakeSummary, getEarthquakesById, updateEarthquake, deleteEarthquake } from "../controllers/earthquakeController.js";

// -------------------------------------------------------- //

const router = express.Router();

// GET
router.get("/", getAllEarthquakes);

router.get("/summary", getEarthquakeSummary);

router.get("/:id", getEarthquakesById);

// ---------------------------------------

// POST
router.post("/import", importEarthquakes);

router.post("/", createEarthquake);

// ---------------------------------------

// PUT
router.put("/:id", updateEarthquake);

// ---------------------------------------

// DELETE
router.delete("/:id", deleteEarthquake);

// -------------------------------------------------------- //

export default router;
