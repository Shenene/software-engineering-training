"use strict";

//-------------------------------------
//

/* I want to create a function for the following:
  1. check if the user selected a dice and which one they selected... what result will be displayed - (Function to set the selected dice)
  2. When the dice is rolled, what outcome do I expect... a random number - (Roll dice function)
  3. Add an event listener for the click on each dice and the 'Roll Button' - (Event Listeners for dice selection)  
*/

//-------------------------------------

// Access the following:
const diceType1El = document.getElementById("dice-type-1"); // dice selector
const diceType2El = document.getElementById("dice-type-2"); // dice selector
const diceType3El = document.getElementById("dice-type-3"); // dice selector
const diceType4El = document.getElementById("dice-type-4"); // dice selector

const btnRollEl = document.getElementById("btn-roll-dice"); // button

const resultDisplayEl = document.getElementById("results-area"); // results display

// -------------------------------------

// ⁡⁣⁣Store the currently selected dice
let selectedDice = null;

// Function to set the selected dice
function selectDiceMessage(diceFaces) {
  selectedDice = diceFaces;
  resultDisplayEl.textContent = `Selected dice: D${selectedDice}`;
}

// Roll dice function
function rollDice(diceFaces) {
  return Math.floor(Math.random() * diceFaces) + 1;
}

// -------------------------------------

// ⁡⁣⁣Event Listeners for dice selection
diceType1El.addEventListener("click", function () {
  selectDiceMessage(6);
});

diceType2El.addEventListener("click", function () {
  selectDiceMessage(10);
});

diceType3El.addEventListener("click", function () {
  selectDiceMessage(12);
});

diceType4El.addEventListener("click", function () {
  selectDiceMessage(20);
});

// Event Listener for roll button
btnRollEl.addEventListener("click", function () {
  if (selectedDice === null) {
    resultDisplayEl.textContent = "Please select a dice first.";
    return;
  }

  const result = rollDice(selectedDice);
  resultDisplayEl.textContent = `You rolled: ${result}`;
});

// ⁡⁣⁢⁡⁣⁢⁢--- U N I T   T E S T I N G ---⁡⁡⁡
// ⁡⁢⁢⁢Specification:⁡
// This function takes a dice and returns a random number.

// ⁡⁢⁢⁢Test:⁡

// ⁡⁢⁢⁢Code:⁡
