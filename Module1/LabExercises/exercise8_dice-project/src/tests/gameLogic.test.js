// ⁡⁢⁢⁡⁣⁣⁢Import from the gameLogic.js file⁡
import gameLogic from "../utils/gameLogic.js";

test("rollDice returns a number between 1 and 6", () => {
  const result = gameLogic.rollDice(6);

  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(6);
});

test("rollDice returns a number between 1 and 20", () => {
  const result = gameLogic.rollDice(20);

  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(20);
});
