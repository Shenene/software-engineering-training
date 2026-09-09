import request from "supertest";
import app from "./index.js";

// ------------------------------------------------------------------------------- //

describe("Calculator API routes", () => {
  // Add
  test("GET /calculator/add => returns the sum of two numbers", () => {
    return request(app)
      .get("/calculator/add?num1=5&num2=5")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: 10 });
      });
  });

  // Subtract
  test("GET /calculator/subtract => returns the difference of two numbers", () => {
    return request(app)
      .get("/calculator/subtract?num1=5&num2=5")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: 0 });
      });
  });

  // Multiply
  test("GET /calculator/multiply => returns the product of two numbers", () => {
    return request(app)
      .get("/calculator/multiply?num1=5&num2=5")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: 25 });
      });
  });

  // Divide
  test("GET /calculator/divide => returns the quotient of two numbers", () => {
    return request(app)
      .get("/calculator/divide?num1=10&num2=5")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: 2 });
      });
  });
});
