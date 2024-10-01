let teas = ["green tea", "black tea", "chai", "oolong tea"];


let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}

// console.log(selectedTeas)

let cities = ["Lodon", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

// console.log(visitedCities)

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num)
}


// console.log(smallNumbers)



let teaTypes = ["chai", "green tea", "herbal tea", "black tea"]
prefferedTeas = []

for (const teas of teaTypes) {
    if (teas == "herbal tea") {
        continue
    }
    prefferedTeas.push(teas)
    
}

// console.log(prefferedTeas)


let citiesPopulation = {
  London : 8900000,
  "New York" : 10000000,
  Paris : 7000000,
  Berlin : 6000000
}

let cityNewPopulations = {}

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city]
}


// console.log(cityNewPopulations);


let worldCitites = {
  "Sydney" : 5000000,
  "London" : 890000,
  "Paris" : 70000000,
  "New York" : 1000000,
  "Tokyo" : 3800000,
  "Dubai" : 15000000,
  "Mumbai" : 1200000,
  "Cape Town" : 300000
}

let cityPopulations = {}
let largeCities = {}
for (const city in worldCitites) {
  if (worldCitites[city] < 10000000) {
    continue
  }
  largeCities[city] = worldCitites[city]
  
}


// console.log(largeCities);


let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return
  }
  availableTeas.push(tea)
});

// console.log(availableTeas);

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = []

myWorldCities.forEach((city)=> {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city)
})

// console.log(traveledCities);


let myNum = [2, 5, 7, 9]
let doubledNumbers = []

for (let i = 0; i < myNum.length; i++) {
  if (myNum[i] === 7) {
    continue;
  }
  doubledNumbers.push(myNum[i] * 2)
}

// console.log(doubledNumbers);

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] 

let shortTeas = []

for (const tea of myTeas) {
  if (tea.length > 10) {
    break
  }
  shortTeas.push(tea)
}

console.log(shortTeas);
