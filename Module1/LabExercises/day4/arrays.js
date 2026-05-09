const fruits = ["apples", "oranges", "peaches", "grapes", "lemons"];

// Changing the value at position 1 & 4
fruits[1] = "banana";
fruits[4] = "mango";

// Adding a fruit to the array
fruits.unshift("watermelon");

// Remove the element at the end of the array
fruits.pop();

console.log(fruits);
// output should be: ["watermelon", "apples", "banana", "peaches", "grapes"]

console.log(fruits.length);
console.log(fruits.length - 1);
console.log(fruits.at(1));
console.log(fruits[3]);
