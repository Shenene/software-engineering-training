import express from "express";
import { getExternalPost } from "../controllers/externalPostController.js";

const router = express.Router();

router.get("/:id", getExternalPost);

export default router;
