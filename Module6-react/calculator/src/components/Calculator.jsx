import { useState } from "react";

// ------------------------------ //

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  function handleCalculate() {
    const firstNumber = Number(number1);
    const secondNumber = Number(number2);

    let answer;

    if (operator === "+") {
      answer = firstNumber + secondNumber;
    } else if (operator === "-") {
      answer = firstNumber - secondNumber;
    } else if (operator === "*") {
      answer = firstNumber * secondNumber;
    } else if (operator === "/") {
      answer = firstNumber / secondNumber;
    }
    setResult(answer);
  }

  function handleClear() {
    setNumber1("");
    setNumber2("");
    setOperator("+");
    setResult(null);
  }

  // ------------------------------------------------------------------------------------------------------------

  // 𝗗 𝗶 𝘀 𝗽 𝗹 𝗮 𝘆   𝗰 𝗼 𝗺 𝗽 𝗼 𝗻 𝗲 𝗻 𝘁   𝗼 𝗻   𝗽 𝗮 𝗴 𝗲

  return (
    <section className="calculator">
      <h1>Calculator</h1>

      <div className="calculator-fields">
        <label htmlFor="number1">First Number</label>

        <input id="number1" type="number" value={number1} onChange={(event) => setNumber1(event.target.value)} />

        <label htmlFor="operator">Operator</label>

        <select id="operator" value={operator} onChange={(event) => setOperator(event.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">x</option>
          <option value="/">/</option>
        </select>

        <label htmlFor="number2">Second Number</label>

        <input id="number2" type="number" value={number2} onChange={(event) => setNumber2(event.target.value)} />

        <div className="btn-wrapper">
          <button type="button" onClick={handleCalculate}>
            Calculate
          </button>

          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      <hr></hr>

      {result !== null && <p className="result">Result: {result}</p>}
    </section>
  );
}

// ------------------------------ //

export default Calculator;
