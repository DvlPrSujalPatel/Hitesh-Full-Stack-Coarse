// while loop


let sum = 0 
let i = 1

while (i <= 5) {
    sum = sum + i
    i++
}
// console.log(sum)

let countdown = []
let j = 1

while (j <= 5) {
    countdown.push(j);
    j++;
}

// console.log(countdown)


// do while loop

let teaCollection = []
let tea;

// do {
//     tea = prompt(`Enter your favorite tea (type "stop" to end)`);

//     if (tea !== "stop") {
//         teaCollection.push(tea);
//     }

// } while (tea !== "stop");

let total = 0
let k = 1
do {
    total = total + k
    k++
} while (k <= 3)
// console.log(total)


// For looop

let multipliedNumbers = []
let numbers = [ 2, 4, 6]

for (let l = 0; l < numbers.length; l++) {
    // takenNumber = numbers[l] * 2
    // multipliedNumbers.push(takenNumber)
    multipliedNumbers.push(numbers[l] * 2)
}


console.log(multipliedNumbers)