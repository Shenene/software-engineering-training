"use strict";

// ⁡⁣⁣⁢-- Using / Accessing --⁡
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

// -------------------------------------------------------

// ⁡⁣⁣⁢-- Calculator Variables --⁡
let num1 = "";
let operator = "";
let num2 = "";
let resultDisplayed = false;

// ⁡⁣⁣⁢-- Event Listeners --⁡

// ⁡⁢⁢⁢Numbers⁡
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    const value = number.dataset.value;

    // Clears previous answer
    if (resultDisplayed) {
      num1 = "";
      operator = "";
      num2 = "";
      display.textContent = "0";
      resultDisplayed = false;
    }

    if (display.textContent === "0") {
      display.textContent = value;
    } else {
      display.textContent += value;
    }

    if (operator === "") {
      num1 += value;
    } else {
      num2 += value;
    }
  });
});

// ⁡⁢⁢⁢Operators⁡ ⁡⁢⁢⁢( / x - + = )⁡
operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    const value = operatorButton.dataset.value;

    if (value === "=") {
      calc();
      return;
    }

    operator = value;
    resultDisplayed = false;
    display.textContent += value;
  });
});

// ⁡⁢⁢⁢Clear⁡
clear.addEventListener("click", () => {
  num1 = "";
  operator = "";
  num2 = "";
  resultDisplayed = false;
  display.textContent = "0";
});

// -------------------------------------------------------

// ⁡⁣⁣⁢-- Calculate --⁡
function calc() {
  let result;

  if (num1 === "" || operator === "" || num2 === "") {
    display.textContent = "Error";
    resultDisplayed = true;
    return;
  }

  if (operator === "+") {
    result = Number(num1) + Number(num2);
  } else if (operator === "-") {
    result = Number(num1) - Number(num2);
  } else if (operator === "*") {
    result = Number(num1) * Number(num2);
  } else if (operator === "/") {
    if (Number(num2) === 0) {
      display.textContent = "Cannot divide by 0";
      resultDisplayed = true;
      return;
    }

    result = Number(num1) / Number(num2);
  }

  display.textContent = result;
  resultDisplayed = true;
}
