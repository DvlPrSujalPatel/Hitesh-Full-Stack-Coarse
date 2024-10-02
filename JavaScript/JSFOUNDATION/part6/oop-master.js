let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    }
}

// console.log(car.start());

function Person(name, age){
    this.name = name
    this.age = age
}

let john = new Person("John Doe", 20)
// console.log(john.age);

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a Sound`
}

Array.prototype.hitesh = function(){
    return `Custom method ${this}`
}

let myArray = [1, 2, 3]
// console.log(myArray.hitesh());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.hitesh());



class Vehicle{
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a Car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive(){
        return `${this.make} : This is an inheritance example` 
    }
}

let myCar = new Car("Porsche", "911")
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Mahindra", "Thar")
// console.log(vehOne.make);


// Encapsulation
 
class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.getBalance())


// Abstraction


class CoffeMachine{
    start(){
        // call DB
        // filter vallue
        return `Starting the machine...`
    }

    brewCoffee(){
        // complex calculation
        return `Brewing Coffee`
    }
    pressStartButton(){
        let msgOne = this.start()
        let msgTwo = this.brewCoffee()
        return `${msgOne} and ${msgTwo}`
    }
}

let myMachine = new CoffeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


// Polymorphism

class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()


// console.log(bird.fly());
// console.log(penguin.fly());


// Static method


class Calculator {
    static add(a, b){
        return a + b
    }
}


// let miniCalc = new Calculator() // not allowed
// console.log(miniCalc.add(2, 3)); // this toooo

// console.log(Calculator.add(2, 4)); // this should be used


// Getters and setters

class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.salary = salary; // Use the setter to validate
    }

    get salary() {
        return `The salary information is confidential.`;
    }

    set salary(value) {
        if (value < 0) {
            throw new Error("Salary cannot be negative");
        } else {
            this.#salary = value;
        }
    }
}

// Example usage:
try {
    let emp1 = new Employee("John", 120000);
    console.log(emp1.salary); // Outputs: The salary information is confidential.

    emp1.salary = 130000; // This works fine

    let emp2 = new Employee("Jane", -120000); // This will throw an error
} catch (error) {
    console.error(error.message);
}

try {
    let emp3 = new Employee("Bob", 100000);
    emp3.salary = -600000; // This will throw an error
} catch (error) {
    console.error(error.message);
}

