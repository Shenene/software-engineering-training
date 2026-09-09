import Calculator from "../libraries/Calculator.js";

const myCalculator = new Calculator();

const addNumbers = (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = myCalculator.add(number1, number2);

  res.status(200).json({ result });
};

const subtractNumbers = (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = myCalculator.subtract(number1, number2);

  res.status(200).json({ result });
};

const multiplyNumbers = (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = myCalculator.multiply(number1, number2);

  res.status(200).json({ result });
};

const divideNumbers = (req, res) => {
  const number1 = Number(req.query.num1);
  const number2 = Number(req.query.num2);

  const result = myCalculator.divide(number1, number2);

  res.status(200).json({ result });
};

export { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers };
