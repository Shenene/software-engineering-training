// Manual Unit Test
import gameLogic from "../utils/gameLogic.js";

/* D6 TEST */

const d6Result = gameLogic.rollDice(6);

console.log("D6 Result:", d6Result);

if (d6Result >= 1 && d6Result <= 6) {
  console.log("D6 PASS");
} else {
  console.log("D6 FAIL");
}

/* D20 TEST */

const d20Result = gameLogic.rollDice(20);

console.log("D20 Result:", d20Result);

if (d20Result >= 1 && d20Result <= 20) {
  console.log("D20 PASS");
} else {
  console.log("D20 FAIL");
}
