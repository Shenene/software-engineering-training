"Use Strict";

// --------------------------------------------------------------//

const column1El = document.getElementById("column1");
const column2El = document.getElementById("column2");

const heading1El = document.getElementById("heading1");
const heading2El = document.getElementById("heading2");

const changeBtn1El = document.getElementById("change-btn-1");
const changeBtn2El = document.getElementById("change-btn-2");

const text1El = document.getElementById("text1");
const text2El = document.getElementById("text2");

// ----------------------------

// Change Background Color (column 1)
function changeMe() {
  column1El.style.background = "rgb(85, 0, 236)";
  // heading1El.textContent = `Hi, I am Fudge`;
  heading1El.textContent = text1El.value;
}
changeBtn1El.addEventListener("click", changeMe);

//

// Change Background Color (column 2)
function changeMe2() {
  column2El.style.background = "rgb(18, 0, 246)";
  // heading2El.textContent = `Hi, I am Guss`;
  heading2El.textContent = text2El.value;
}
changeBtn2El.addEventListener("click", changeMe2);
