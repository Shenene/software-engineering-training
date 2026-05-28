"use strict";

// --- Module 3 - Labs JS Fundamentals --- //
console.log("Part 1");

console.log(' "" + 1 + 0 => ', "" + 1 + 0) / "10";

console.log(' "" - 1 + 0 => ', "" - 1 + 0); // -1

console.log(" true + false => ", true + false); // 1

console.log(" !true => ", !true); // false

console.log(' 6 / "3" => ', 6 / "3"); // 2

console.log(' "2" * "3" => ', "2" * "3"); // 6

console.log(' 4 + 5 + "px" => ', 4 + 5 + "px"); // "9px"

console.log(' "$" + 4 + 5 => ', "$" + 4 + 5); // "$45"

console.log(' "4" - 2 => ', "4" - 2); // 2

//----------------------

console.log(' "4px" - 2 => ', "4px" - 2); // NaN

console.log(' parseInt("4px") - 2 + "px" => ', parseInt("4px") - 2 + "px"); // "2px"

//----------------------

console.log(' "  -9  " + 5 => ', "  -9  " + 5); // " -9 5"

console.log(' "  -9  " - 5 => ', "  -9  " - 5); // -14

console.log(" null + 1 => ", null + 1); // 1

console.log(" undefined + 1 => ", undefined + 1); // NaN

console.log(" undefined == null => ", undefined == null); // true

console.log(" undefined === null => ", undefined === null); // false

console.log({
  expression: ' " \t \n" - 2 ',
  result: " \t \n" - 2, // -2
});

// --------------------------------------- //
console.log("\n");
console.log("Part 2");

let three = "3";
let four = "4";
let thirty = "30";

//what is the value of the following expressions?
let addition = three + four; // 34
/* 
The addition will not give the correct answer as the values are strings and 
it will just combine the values. 

It can be fixed by converting to a number first:
console.log(Number(three) + Number(four)); // Output: 7 
or by using
console.log(parseInt(three) + parseInt(four)); // Output: 7  
*/

let multiplication = three * four;
let division = three / four;
let subtraction = three - four;

let lessThan1 = three < four; // true
let lessThan2 = thirty < four; // true
/*  
Straight away I can see that the lessThan2 variable is not producing the correct answer.
It will be true which is not correct as 30 is not less than 4.
The string is compared by each characther, so when the first numbers are compared, 
in this case 3 & 4, then 3 is less than 4 so it displays as true. 
so, it's fixed again by forcing it to be a number and explicitly saying console.log(Number(thirty) < Number(four)); // false
*/

// --------------------------------------- //
console.log("\n");
console.log("Part 3");
if (0) console.log("#1 zero is true"); // false
if ("0") console.log("#2 zero is true"); // true
if (null) console.log("null is true"); // false
if (-1) console.log("negative is true"); // true
if (1) console.log("positive is true"); // true

/* For the above, only the true statements will print to the console. 
   It's because 0 is classed as a false value and so is null. 
*/

// --------------------------------------- //
console.log("\n");
console.log("Part 4");

let a = 2,
  b = 8;

let result = `${a} + ${b} is `;

// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }

// Ternary Operator
result += a + b < 10 ? "less than 10" : "geater than 10";

console.log(result);

// the += is the same as saying result = result + the value

// --------------------------------------- //
console.log("\n");
console.log("Part 5");

// Function Declaration
function getGreeting(name) {
  return "Hello " + name + "!";
}
console.log(getGreeting("Shenene"));

//  a) Function Expression
const greet = function (name) {
  return "Hello " + name + "!";
};
console.log(greet("John"));

// b) Arrow Function
const greetings = (name) => "Hello " + name + "!";
console.log(greetings("Sam"));

// --------------------------------------- //
console.log("\n");
console.log("Part 6");

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

// object
const inigo = {
  firstName: "Inigo",

  // method
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },

  // getCatchPhrase(person) {
  //   return 'Nice to meet you.';

  // b) Updated the getCatchPhrase
  // getCatchPhrase(person) {
  //   if (person.numFingers === 6) {
  //     return "You killed my father. Prepare to die";
  //   }
  //   return "Nice to meet you.";
  // },

  // c) Arrow function & Ternary
  getCatchPhrase: (person) => {
    return person.numFingers === 6 ? "You killed my father. Prepare to die" : "Nice to meet you.";
  },
  // getCatchPhrase(person) {
  //   return person.numFingers === 6 ? "You killed my father. Prepare to die" : "Nice to meet you.";
  // },
};

// a)
inigo.lastName = "MT";

inigo.greeting(westley);
inigo.greeting(rugen);

// --------------------------------------- //
console.log("\n");
console.log("Part 7");
// Method chaining
const basketballGame = {
  score: 0,
  foulCount: 0,

  foul() {
    this.foulCount++;
    return this;
  },

  freeThrow() {
    this.score++;
    return this;
  },

  basket() {
    this.score += 2;
    return this;
  },

  threePointer() {
    this.score += 3;
    return this;
  },

  //   halfTime() {
  //     console.log("Halftime score is " + this.score);
  //     return this;
  //   },

  //   fullTime() {
  //     console.log("The final score is " + this.score);
  //     return this;
  //   },
  // };

  //   halfTime() {
  //     console.log("Halftime score is " + this.score + this.foulCount);
  //     return this;
  //   },

  //   fullTime() {
  //     console.log("The final score is " + this.score + this.foulCount);
  //     return this;
  //   },
  // };

  halfTime() {
    console.log(`Halftime score is ${this.score}, Foul: ${this.foulCount}`);
    return this;
  },

  fullTime() {
    console.log(`The final score is ${this.score}. Foul: ${this.foulCount}`);
    return this;
  },
};

basketballGame.foul().freeThrow().basket().threePointer().halfTime().fullTime();
basketballGame.basket().threePointer().halfTime().fullTime().freeThrow().foul();
basketballGame.halfTime().fullTime().foul().basket().freeThrow().threePointer();

// --------------------------------------- //
console.log("\n");
console.log("Part 8");
// a)
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

function city(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

city(sydney);

console.log("\n");

//b)
const auckland = {
  name: "Auckland",
  population: 2_500_000,
  country: "NZ",
  founded: "unknown",
  timezone: "Pacific/Auckland",
};

city(auckland);

// --------------------------------------- //
console.log("\n");
console.log("Part 9");
// a)
console.log("---- a) ----");

let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = [];

moreSports.push("Tennis", "ice-skating"); // started adding to my array by pushing to it
moreSports.push("rugby"); // ddding to end of my array
moreSports.unshift("snowboarding"); // adding to the beginning of my array

console.log(moreSports);
console.log(teamSports);

//----------------------------
// b) String
console.log("---- b) ----");

let dog1 = "Bingo";
let dog2 = dog1;

dog2 = "Waffle";

console.log(dog1); // Bingo
console.log(dog2); // Waffle

//----------------------------
// c) Object
console.log("---- c) ----");

let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = cat1;

console.log(cat1); // { name: "Fluffy", breed: "Siberian" }
console.log(cat2); // { name: "Fluffy", breed: "Siberian" }

cat2.name = "Fudge";
console.log(cat1.name); // Fudge
console.log(cat2.name); // Fudge

//----------------------------
// d)
console.log("---- d) ----");

console.log(teamSports);
// original array - did not change because it's a different array.

console.log(dog1); // Bingo
/*   
Strings are part of the 7 primative data types and immutable, so you can only re-assign it a value by 
using a new variable and new string and the original will stay the same.
*/

console.log(cat1);
/*
Both reference the same object so it's by reference, therefore they have the same info.
*/

//----------------------------
// e)
console.log("---- e) ----");

// I'm using the spread operator for a shallow copy
moreSports = [...teamSports];
console.log(teamSports);
console.log(moreSports);
// console.trace(teamSports, moreSports); // line check

// test
moreSports.pop();
console.log(teamSports);
console.log(moreSports);

moreSports.push("Volleyball");
console.log(moreSports);

//----------------------------
console.log(cat1, cat2);
cat2 = { ...cat1 };

cat2.name = "Nugget";

console.log("cat1:", cat1, "cat2:", cat2); // they are now independant copies

// --------------------------------------- //
console.log("\n");
console.log("Part 10");
// OOP - reusable blue prints (older method)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  // e)
  this.canDrive = function () {
    if (this.age >= 18) {
      return true;
    } else {
      return false;
    }
  };
}

// a) - Instance of Person
let person1 = new Person("Sam", "25");

// b)- Instance of Person
let person2 = new Person("James", "17");

// c)
console.log(person1, person2);

// e)
console.log("person1 can drive:", person1.canDrive());
console.log("person2 can drive:", person2.canDrive());

//----------------------------

// d)
// OOP - reusable blue prints (newer method)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // e)
    this.canDrive = function () {
      return this.age >= 18;
    };
  }
}

const person3 = new PersonClass("John", "40");
console.log(person3);

// e)
console.log("person3 can drive:", person3.canDrive());

// -------------------------------------------------------------------------------------------//
