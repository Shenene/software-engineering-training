import Logger from "./Logger.js";

// --------------------------------------------------------------------- //

class Calculator {
  constructor() {
    // this.id = Date.now(); // gives this calculator object it's own id based on a timestamp
    this.id = Math.floor(Math.random() * 5_000_000);
    this.logger = new Logger();
  }

  // -----------------------------------------------------------------------

  #log(operation, value) {
    const message = `[Calculator ${this.id}] ${operation} result: ${value}`;
    this.logger.log(message);
  }

  // -----------------------------------------------------------------------

  add(num1, num2) {
    // console.log("Add method called");
    const value = num1 + num2;
    this.#log("add", value);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    this.#log("subtract", value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    this.#log("multiply", value);
    return value;
  }

  divide(num1, num2) {
    const value = num1 / num2;
    this.#log("divide", value);
    return value;
  }
}

// --------------------------------------------------------------------- //

export default Calculator;
