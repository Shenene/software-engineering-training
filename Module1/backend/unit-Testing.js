console.log("Hello Shenene");

// Multiply
function multiply(a, b) {
  return a * b;
}
console.log(multiply(10, 2));

// Divide
function divide(a, b) {
  return a / b;
}
console.log(divide(10, 2));

// Subtract
function subtract(a, b) {
  return a - b;
}
console.log(subtract(10, 2));

// Sum
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 2));

// Greet
function greet(name) {
  console.log("Hello " + name);
}
greet("Shenene");

// Greet 2
const name = "Shenene";
function myName(personName) {
  console.log(`Hello ${personName}`);
}
myName(name);

//
console.log("\n");
//

// ⁡⁣⁢⁢--- U N I T   T E S T I N G ---⁡
// Unit tests for multiply
if (multiply(10, 2) !== 20) {
  throw new Error("multiply Test 1 failed");
}
if (multiply(0, 5) !== 0) {
  throw new Error("multiply Test 2 failed");
}
if (multiply(-3, 2) !== -6) {
  throw new Error("multiply Test 3 failed");
}

// Unit tests for divide
if (divide(10, 2) !== 5) {
  throw new Error("divide Test 1 failed");
}
if (divide(0, 5) !== 0) {
  throw new Error("divide Test 2 failed");
}
if (divide(5, 2) !== 2.5) {
  throw new Error("divide Test 3 failed");
}

// Unit tests for subtract
if (subtract(10, 2) !== 8) {
  throw new Error("subtract Test 1 failed");
}
if (subtract(0, 5) !== -5) {
  throw new Error("subtract Test 2 failed");
}
if (subtract(-3, 2) !== -5) {
  throw new Error("subtract Test 3 failed");
}

// Unit tests for sum
if (sum(10, 2) !== 12) {
  throw new Error("sum Test 1 failed");
}
if (sum(0, 5) !== 5) {
  throw new Error("sum Test 2 failed");
}
if (sum(2.5, 1.5) !== 4) {
  throw new Error("sum Test 3 failed");
}

//
// ------------------------------------------------------
//
console.log("\n");
//
// ⁡⁣⁢⁡⁣⁢⁢--- U N I T   T E S T I N G ---⁡⁡

function sum(a, b) {
  return a + b;
}
// Test
if (sum(2, 4) != 6) {
  throw new Error("Test failed");
}

console.log("All tests passed.");

//
// ------------------------------------------------------

// This function takes two numbers and returns their product.
if (multiply(10, 2) !== 20) {
  throw new Error("multiply Test 1 failed");
}

if (multiply(-3, 2) !== -6) {
  throw new Error("multiply Test 2 failed");
}

if (multiply(a, b)) {
  return a * b;
}

// ------------------------------------------------------

// This function takes two numbers and returns their sum.

if (sum(10, 2) !== 12) {
  throw new Error("sum Test 1 failed");
}

if (sum(0, 5) !== 5) {
  throw new Error("sum Test 2 failed");
}

if (sum(2.5, 1.5) !== 4) {
  throw new Error("sum Test 3 failed");
}

function sum(a, b) {
  return a + b;
}

// ------------------------------------------------------
//
console.log("\n");
//
// ⁡⁣⁢⁢--- U N I T   T E S T I N G --⁡-⁡
// This function takes a name and returns a greeting string.

if (greet("Shenene") !== "Hello Shenene") {
  throw new Error("greet Test 1 failed");
}

if (greet("Sam") !== "Hello Sam") {
  throw new Error("greet Test 2 failed");
}

if (greet("") !== "Hello ") {
  throw new Error("greet Test 3 failed");
}

function greet(name) {
  return "Hello " + name;
}

console.log("All tests passed.");

// -----------------------------------------------------

// ⁡⁢⁢⁢Specification:⁡
// This function should take two numbers and return their sum.

// ⁡⁢⁢⁢Test:⁡
if (sum(2, 4) !== 6) {
  throw new Error("sum(2, 4) should return 6");
}

// ⁡⁢⁢⁢Code:⁡
function sum(a, b) {
  return a + b;
}

console.log("All tests passed.");
