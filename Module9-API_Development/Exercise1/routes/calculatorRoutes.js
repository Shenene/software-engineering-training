import { Router } from "express";

import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "../controllers/calculatorController.js";

const router = Router();

router.get("/add", addNumbers);

router.get("/subtract", subtractNumbers);

router.get("/multiply", multiplyNumbers);

router.get("/divide", divideNumbers);

export default router;
