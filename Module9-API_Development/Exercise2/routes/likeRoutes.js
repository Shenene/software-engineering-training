import express from "express";
import { createLike } from "../controllers/likeController.js";

const router = express.Router();

router.post("/", createLike);

export default router;
