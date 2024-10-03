// // Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
// // Use setTimeout to simulate this behaviour.

// function simulateAsyncTask() {
//     console.log("Task started");
//     setTimeout(() => {
//         console.log("Task finished");
//     }, 2000);
// }

// simulateAsyncTask();

// // Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).
// // Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.

// function simulateMultipleTasks() {
//     console.log("Task 1 started");
//     setTimeout(() => {
//         console.log("Task 1 finished");
//     }, 1000);
//     console.log("Task 2 started");
//     setTimeout(() => {
//         console.log("Task 2 finished");
//     }, 2000);
//     console.log("Task 3 started");
//     setTimeout(() => {
//         console.log("Task 3 finished");
//     }, 3000);
    
    
// }

// simulateMultipleTasks();


// // Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
// // Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.




// function fetchDataWithCallback(callback) {
//     setTimeout(() => {
//         callback("Fetched data");
//     }, 2000);
// }

// fetchDataWithCallback((data) => {
//     console.log(data);
// });


// Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.

// function createCounter() {
//     let count = 0;
//     return () => {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// // Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".

// function rateLimiter(fn, limit) {
//     let lastCallTime = 0;
//     return (...args) => {
//         const currentTime = Date.now();
//         if (currentTime - lastCallTime < limit) {
//             return "Rate limit exceeded";
//         }   
//         lastCallTime = currentTime;
//         return fn(...args);
//     };
// }

// const limitedFunction = rateLimiter((a, b) => a + b, 1000);
// console.log(limitedFunction(1, 2)); // 3
// console.log(limitedFunction(2, 3)); // "Rate limit exceeded"

// // Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.

// function memoize(fn) {
//     const cache = new Map();
//     return (...args) => {
//         const key = JSON.stringify(args);
//         if (cache.has(key)) {
//             return cache.get(key);
//         }
//         const result = fn(...args);
//         cache.set(key, result);
//         return result;
//     };
// }

// const memoizedFunction = memoize((a, b) => a + b);
// console.log(memoizedFunction(1, 2)); // 3
// console.log(memoizedFunction(1, 2)); // 3 (cached result)


//  Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()

// function Animal() {}

// Animal.prototype.makeSound = function () {
//   return "Animal sound";
// };

// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.bark = function () {
//   return "Woof!";
// };

// Dog.prototype.constructor = Dog;

// // Task 2
// function Shape(color) {
//   this.color = color;
// }
// Shape.prototype.getColor = function () {
//   return this.color;
// };

// function Rectangle(width, height, color) {
//   Shape.call(this, color); // Call the Shape constructor
//   this.width = width;
//   this.height = height;
// }
// Rectangle.prototype = Object.create(Shape.prototype); // Set up inheritance
// Rectangle.prototype.constructor = Rectangle;

// Rectangle.prototype.getArea = function () {
//   return this.width * this.height;
// };


// ... existing code ...

// const person = {
//   name: "Alice",
//   introduce: function() {
//     return `Hello, my name is ${this.name}`;
//   }
// };

// function greet(introduceFn) {
//   console.log(introduceFn());
// }

// // Using bind to ensure the correct 'this' context
// const boundIntroduce = person.introduce.bind(person);

// // Test the bound function
// greet(boundIntroduce); // Should output: "Hello, my name is Alice"

// // Test without binding (this would fail without bind)
// // greet(person.introduce); // Would output: "Hello, my name is undefined"




// function introduce() {
//   return `Hello, my name is ${this.name}`;
// }

// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// console.log(introduce.call(person1)); // Should output: "Hello, my name is Alice"
// console.log(introduce.call(person2)); // Should output: "Hello, my name is Bob"

// Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

function fetchUser() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function fetchPosts() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}
// Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()

async function fetchAllData() {
  const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
  console.log(user, posts);
}

fetchAllData();

// Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.
// Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.
// Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.

function fetchSuccess() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

function fetchFailure() {
  return new Promise((_, reject) => setTimeout(reject, 1000));
}

function handlePromises() {
  Promise.all([fetchSuccess(), fetchFailure()])
    .then(() => console.log('Both promises resolved successfully'))
    .catch(error => console.error('At least one promise rejected:', error));
}

handlePromises();


//Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout exceeded')), timeout)
  );
  return Promise.race([promise, timeoutPromise]);
}

fetchWithTimeout(fetchSuccess(), 1500)
  .then(() => console.log('Promise resolved within timeout'))
  .catch(error => console.error('Promise rejected:', error.message));





