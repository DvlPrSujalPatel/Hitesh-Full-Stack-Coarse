function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Porsche", "911");
// console.log(myCar);

let myNewCar = new Car("Lamborghini", "Diablo")
// console.log(myNewCar);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("Lemon tea");
// console.log(lemonTea.describe())


function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return ` ${this.species} makes a sound`
}

let dog = new Animal("Dog");
// console.log(dog.sound())

let cat = new Animal("Cat");
// console.log(cat.sound())


function Drink(name){
    if (!new.target) {
        throw new Error("Must use the new keyword");
    }
    this.name = name;
}

let tea = new Drink("Tea");
let coffee = Drink("Coffee");