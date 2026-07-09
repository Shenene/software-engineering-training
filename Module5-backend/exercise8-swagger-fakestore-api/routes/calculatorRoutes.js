import { Router } from "express";
import Calculator from "../libraries/Calculator.js";

const router = Router();
const myCalculator = new Calculator();

// ---------------------------------------- //

// ⁡⁢⁣⁡⁣⁢⁡⁣⁣⁢Add⁡⁡⁡
router.get("/add", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = myCalculator.add(number1, number2);

  res.status(200).json({ result: result });
});

// ----------------------------------------

// ⁡⁣⁢⁡⁣⁣⁢Subtract⁡⁡
router.get("/subtract", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = myCalculator.subtract(number1, number2);

  res.status(200).json({ result: result });
});

// ----------------------------------------

// ⁡⁣⁣⁢Multiply⁡
router.get("/multiply", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = myCalculator.multiply(number1, number2);

  res.status(200).json({ result: result });
});

// ----------------------------------------

// ⁡⁣⁣⁢Divide⁡
router.get("/divide", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = myCalculator.divide(number1, number2);

  res.status(200).json({ result: result });
});

// ---------------------------------------- //

export default router;
