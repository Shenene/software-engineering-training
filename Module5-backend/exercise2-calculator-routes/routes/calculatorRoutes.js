import { Router } from "express";

const router = Router();

// ---------------------------------------- //

// ⁡⁢⁣⁡⁣⁢⁡⁣⁣⁢Add⁡⁡⁡
router.get("/add", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = number1 + number2;

  res.status(200).json({ result: result });
});

// ----------------------------------------

// ⁡⁣⁢⁡⁣⁣⁢Subtract⁡⁡
router.get("/subtract", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = number1 - number2;

  res.status(200).json({ result: result });
});

// ----------------------------------------

// ⁡⁣⁣⁢Multiply⁡
router.get("/multiply", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = number1 * number2;

  res.status(200).json({ result: result });
});

// ----------------------------------------

// ⁡⁣⁣⁢Divide⁡
router.get("/divide", (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = number1 / number2;

  res.status(200).json({ result: result });
});

// ---------------------------------------- //

export default router;
