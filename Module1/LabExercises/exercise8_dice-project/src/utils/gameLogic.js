"use strict";

function rollDice(diceFaces) {
  return Math.floor(Math.random() * diceFaces) + 1;
}

// ⁡⁣⁣⁢Export game logic for testing⁡
export default {
  rollDice,
};
