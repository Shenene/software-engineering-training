"use strict";

// Getting the DateTime from Luxon Library
const DateTime = luxon.DateTime;

// Using / Accessing:
const output = document.getElementById("output");

// ---------------------------------------------- //

// My Birthdate
const birthDate = DateTime.local(1980, 7, 10);

// Current date & time
const currentDate = DateTime.now();

// ----------------

// 1. Number of days between my birthdate and the current date
const daysBetween = Math.floor(currentDate.diff(birthDate, "days").days);

// ----------------------------------------------
//

// 2. Number of years, months and days between my birthdate and current date
const ageDifference = currentDate.diff(birthDate, ["years", "months", "days"]);

const years = Math.floor(ageDifference.years);
const months = Math.floor(ageDifference.months);
const days = Math.floor(ageDifference.days);

// ----------------------------------------------
//

// 3. Given two dates, display the date closest to the current date
const date1 = DateTime.local(2026, 5, 21);
const date2 = DateTime.local(2025, 4, 18);

const differenceFromDate1 = Math.abs(currentDate.diff(date1, "days").days);
const differenceFromDate2 = Math.abs(currentDate.diff(date2, "days").days);

let closestDate;

if (differenceFromDate1 < differenceFromDate2) {
  closestDate = date1;
} else {
  closestDate = date2;
}

// ----------------------------------------------
//

// 4. Given two dates, display whether the first date is before or after the second date
let beforeOrAfter;

if (date1 < date2) {
  beforeOrAfter = "Date 1 is before Date 2";
} else if (date1 > date2) {
  beforeOrAfter = "Date 1 is after Date 2";
} else {
  beforeOrAfter = "Date 1 is the same as Date 2";
}

// ----------------------------------------------
//

// 5. Display the current time in London
const londonTime = DateTime.now().setZone("Europe/London").toFormat("HH:mm:ss");

//
// ----------------------------------------------
//

// Display on page
output.innerHTML = `<h2>Result</h2>

<p><strong>1. </strong> Number of days between my birthdate and the current date:<br> ${daysBetween} days</p>
<p><strong>2. </strong> Number of years, months and days between my birthdate and current date:<br> ${years} years, ${months} months and ${days} days</p>
<p><strong>3. </strong> Given two dates, display the date closest to the current date:<br> ${closestDate.toFormat("dd LLLL yyyy")} </p>
<p><strong>4. </strong> Given two dates, display whether the first date is before or after the second date:<br> ${beforeOrAfter}</p>
<p><strong>5. </strong> Given two dates, display whether the first date is before or after the second date:<br> ${londonTime}</p>`;
