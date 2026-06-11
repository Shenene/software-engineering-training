"use strict";

console.log("Module 3 - JS Intermediate");

console.log("-- Question 1 --");
/*
1. Create a function that takes a string as a parameter and returns the string with the first character 
   of each word changed into a capital letter, as in the example below. Test it with different strings.
   console.log(ucFirstLetters("los angeles")); //Los Angeles
*/
function ucFirstLetters(str) {
  let words = str.toLowerCase().split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i] != "") {
      result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
    }
  }
  return result.trim();
}

console.log(ucFirstLetters("this is a string")); // This Is A String
console.log(ucFirstLetters("this is my string")); // This Is My String
console.log(ucFirstLetters("los angeles")); // Los Angeles
console.log(ucFirstLetters("anOTHer tESt STRing")); // Another Test String

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 2 --");
/*
2. a) Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length. 
      It should return either the truncated text, with an ellipsis (…) added to the end if it was too long, or the original text otherwise. 
*/
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}
console.log(truncate("This text will be truncated if it is too long", 25));
console.log(truncate("New test string", 30));

// b) Write another variant of the truncate function that uses a conditional operator.
// console.log(truncate("This text will be truncated if it is too long", 25)); // This text will be truncat...

// ternary operator
function truncate1(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}
console.log(truncate1("This text will be truncated if it is too long", 25));
console.log(truncate1("New test string", 30));

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 3 --");
/*
3. Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array 

a) Add 2 new values to the end 
b) Add 2 new values to the beginning 
c) Sort the values alphabetically 
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue 
e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. 
   Try to make it work regardless of upper/lower case.
*/
const animals = ["Tiger", "Giraffe"];
console.log(animals);

// a) Added to end
animals.push("Lion", "Bear");
console.log(animals);

// b) Added to beginning
animals.unshift("Hippo", "Elephant");
console.log(animals);

// c) Sorted alphabetically
animals.sort();
console.log(animals);

// d) newValue
function replaceMiddleAnimal(newValue) {
  animals.splice(2, 1, newValue);
  console.log(animals);
}
replaceMiddleAnimal("Seal");

// e) beginsWith
function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
}
console.log(findMatchingAnimals("b"));

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 4 --");
/*
4. a) Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'. 
      The function should remove all dashes, and uppercase the first letter of each word after a dash.
   b) Create variants of the camelCase function that use different types of for loops, and 
   c) with and without the conditional operator.
*/

// a) for Loop
function camelCase(cssProp) {
  const words = cssProp.toLowerCase().split("-");
  let result = words[0];

  // console.log(words);

  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1);
  }
  return result;
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// camelCase1("margin-left");

//
// b)  for...of Loop
function camelCase(cssProp) {
  const words = cssProp.split("-");
  let result = words[0];

  for (const word of words.slice(1)) {
    result += word[0].toUpperCase() + word.slice(1);
  }
  return result;
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

//
//conditionals
// c) if / else statement
function camelCase(cssProp) {
  const words = cssProp.toLowerCase().split("-");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[i];
    } else {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return result;
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

//
// c) ternary operator
function camelCase(cssProp) {
  const words = cssProp.toLowerCase().split("-");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    result += i === 0 ? words[i] : words[i][0].toUpperCase() + words[i].slice(1);
  }
  return result;
}
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 5 --");
// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
let twentyCents = 0.2;
let tenCents = 0.1;

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen); //why is this not working?

/*
a) Explain why the above code returns the wrong answer 
b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result. 
c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful. 
d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
*/

// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below:
// console.log(0.3 == currencyAddition(0.1, 0.2)); // true
// console.log(0.3 == currencyOperation(0.1, 0.2, "+")); // true

/* 
  a) Answer: 
     .toFixed will give you a string, so in the console log the string of twentyCents + the string of tenCents will be combined into a new string,
     i.e. "0.20" + "0.10" = "0.200.10"
*/
//
// b)
function currencyAddition(float1, float2) {
  const num = 100;

  const cents1 = Math.round(float1 * num);
  const cents2 = Math.round(float2 * num);

  const total = cents1 + cents2;

  return total / num;
}
console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.7 == currencyAddition(0.4, 0.3)); // true
console.log(0.5 == currencyAddition(0.1, 0.2)); // false
console.log(0.9 == currencyAddition(0.8, 0.5)); // false

//
// c & d) Switch Statement
function currencyOperation(float1, float2, operation, numDecimals) {
  if (numDecimals < 0 || numDecimals > 10) {
    return "decimals must be between 1 & 10";
  }

  const factor = 10 ** numDecimals;

  const num1 = Math.round(float1 * factor);
  const num2 = Math.round(float2 * factor);

  switch (operation) {
    case "+":
      return (num1 + num2) / factor;

    case "-":
      return (num1 - num2) / factor;

    case "*":
      return (num1 * num2) / (factor * factor);

    case "/":
      return num1 / num2;

    default:
      return "not valid";
  }
}
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 2)); // true
console.log(0.2 == currencyOperation(0.4, 0.2, "-", 3)); // true
console.log(0.08 == currencyOperation(0.4, 0.2, "*", 4)); // true
console.log(0.3 == currencyOperation(0.6, 0.2, "/", 5)); // false

console.log(0.8 == currencyOperation(0.4, 0.2, "%")); // false
console.log(currencyOperation(0.4, 0.2, "%")); // not valid
console.log("not valid" == currencyOperation(0.4, 0.2, "%")); // true

console.log(currencyOperation(0.5, 0.2, "+", 2)); // 0.7
console.log(currencyOperation(0.5, 0.2, "+", 2).toFixed(2)); // 0.70

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 6 --");
/*
6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. Your function should return an array containing only the unique values from duplicatesArray.
Test with the following arrays and create another one of your own.
*/
/*
const colours = ["red", "green", "blue", "yellow", "orange", "red", "blue", "yellow"];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
*/

// variables
const colours = ["red", "green", "blue", "yellow", "orange", "red", "blue", "yellow"];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const animal = ["dog", "cat", "cat", "cat", "rat", "mouse"];

// function declaration
function unique(duplicatesArray) {
  return duplicatesArray.filter((item, index) => {
    return duplicatesArray.indexOf(item) === index;
  });
}
console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(animal));

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 7 --");
// 7. Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.
/*
a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id. 
b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950. 
c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’. 
d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial. 
e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
*/

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

// a)
function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book.title;
}
console.log(getBookTitle(1));
console.log(getBookTitle(2));
console.log(getBookTitle(3));
console.log(getBookTitle(4));
console.log(getBookTitle(5));

//
// b)
function getOldBooks() {
  const oldBooks = books.filter((book) => book.year < 1950);
  return oldBooks;
}
console.log(getOldBooks());

//
// c)
function addGenre() {
  return books.map((book) => {
    return { ...book, genre: "classic" };
  });
}
console.log(addGenre());

//
// d)
function getTitles(authorInitial) {
  return books.filter((book) => book.author.startsWith(authorInitial)).map((book) => book.title);
}
console.log(getTitles("F"));
console.log(getTitles("H"));
console.log(getTitles("G"));
console.log(getTitles("A"));
console.log(getTitles("J"));

//
// e)
function latestBook() {
  let latestYr = books[0].year;

  books.forEach((book) => {
    if (book.year > latestYr) {
      latestYr = book.year;
    }
  });

  return books.find((book) => book.year === latestYr);
}

console.log(latestBook());

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 8 --");
// 8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

/*
a) Create a new phoneBookDEF Map to store names beginning with D, E or F 
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values 
c) Update the phone number for Caroline 
d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map 
e) Combine the contents of the two individual Maps into a single phoneBook Map 
f) Print out the full list of names in the combined phone book
*/

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) New map
const phoneBookDEF = new Map();
phoneBookDEF.set("Don", "0465231172");
phoneBookDEF.set("Elsa", "0445288185");
phoneBookDEF.set("Fred", "0415291589");

console.log(phoneBookDEF);

//
// b) Array
const phoneBookDEF1 = new Map([["Don", "0465231172"], [("Elsa", "0445288185")], [("Fred", "0415291589")]]);
console.log(phoneBookDEF1);

//
// c) // phone number updated
phoneBookABC.set("Caroline", "0420118821");
console.log(phoneBookABC);

//
// d)
function printPhoneBook(contacts) {
  contacts.forEach((phone, name) => {
    console.log(`${name}: ${phone}`);
  });
}
printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

//
// e)
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);

//
//f)
console.log([...phoneBook.keys()]);

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 9 --");
// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

/*
a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
*/

// a)
function sumSalaries(salaries) {
  let result = 0;

  for (let key in salaries) {
    result += salaries[key];
  }
  return result;
}

console.log(sumSalaries(salaries));

//
// b)
function topEarner(salaries) {
  let highestSalary = 0;
  let highestEarner = "";

  for (let key in salaries) {
    if (salaries[key] > highestSalary) {
      highestSalary = salaries[key];
      highestEarner = key;
    }
  }
  return highestEarner;
}

console.log(topEarner(salaries));

// -------------------------------------------------------------------------------------------------------------------------------
//
console.log("\n");

//
console.log("-- Question 10 --");
/* 
10. The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
*/
/*
a) Print the total number of minutes that have passed so far today
b) Print the total number of seconds that have passed so far today
c) Calculate and print your age as: 'I am x years, y months and z days old'
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.
*/

const today = new Date();
// console.log(today);

console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a)
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(`${minutesPassed} minutes have passed so far today`);

// b)
const secondsPassed = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(`${secondsPassed} seconds have passed so far today`);

// c)
const birthDate = new Date("1980-07-10");

const years = today.getFullYear() - birthDate.getFullYear();
const months = today.getMonth() - birthDate.getMonth();
const days = today.getDate() - birthDate.getDate();

console.log(`I am ${years} years, ${months} months, and ${days} days old`);

// d)
function daysInBetween(date1, date2) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const difference = Math.abs(date2 - date1);

  return Math.floor(difference / millisecondsPerDay);
}
console.log(daysInBetween(new Date("2026-06-12"), new Date("1980-06-10")));
