// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

function stringToNumber(input) {
    const num = Number(input);
    if (isNaN(num)) {
        return "Not a number";
    }
    return num;
}
// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

function flipBoolean(input) {
    // Convert input to boolean and then flip it
    return !Boolean(input);
}

// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
function whatAmI(input) {
    // Convert input to a number
    const asNumber = Number(input);
    
    // Check if it's a valid number
    if (!isNaN(asNumber)) {
        return "I'm a number!";
    } else if (typeof input === 'string') {
        return "I'm a string!";
    } else {
        return `I'm a ${typeof input}!`;
    }
}

//Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.

function isItTruthy(input) {
    // Check if the input is truthy
    if (input) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}

// Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
  return arr.filter(item => typeof item === 'number' && !isNaN(item));
  
}


// Write a function reverseArray(arr) that reverses the array
function reverseArray(arr) {
    return arr.reverse();
}

// Write a function findMax(arr) that returns the largest number in the array
function findMax(arr) {
  return Math.max(...arr);
}
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(arr) {
  return arr.flat();
}

// Write a function sumOfN(n) that returns the sum of the first n natural numbers

function sumOfN(n) {
    return n * (n + 1) / 2;
}

// printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

function printMultiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            table.push(`${i} * ${j} = ${i * j}`);
        }
    }
}

// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.

function countVowels(str) {
    return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
}

// Write a function squareNumbers(arr) using map() and arrow functions

function squareNumbers(arr) {
    return arr.map(num => num * num);
}


// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

function sumPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

function getNames(arr) {
    return arr.map(obj => obj.name);
}

// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

function findLongestWord(arr) {
    return arr.reduce((longest, word) => longest.length > word.length ? longest : word, '');
}


// Nested Functions and Context
// Task 1: Using this in Objects

// Create an object person with a method introduce() that uses this

// additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()

const person = {
    name: 'Hitesh',
    age: 19.5,
    introduce: function() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
};




// Task 2: Function within a function

// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()

function outer() {
    function inner() {
        return 'Inner function called';
    }
    return inner();
}

