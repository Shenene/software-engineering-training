import express from "express";

import { getKnowledge } from "../controllers/knowledgeController.js";

// ---------------------------------- //

const router = express.Router();

router.get("/", getKnowledge);

// ---------------------------------- //

export default router;
