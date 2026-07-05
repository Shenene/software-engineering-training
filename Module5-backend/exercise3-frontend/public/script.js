"use strict";

// Using/Accessing:
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const operationEl = document.getElementById("operation");
const calculatorBtn = document.getElementById("calculateBtn");
const resultEl = document.getElementById("result");

calculatorBtn.addEventListener("click", () => {
  const num1 = num1El.value;
  const num2 = num2El.value;
  const operation = operationEl.value;

  // console.log(num1);
  // console.log(num2);
  // console.log(operation);

  const url = `/calculator/${operation}?num1=${num1}&num2=${num2}`;

  // console.log(url);

  // fetch(url).then((response) => {
  //   console.log(response);
  // });

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      resultEl.value = data.result;
    });
});
