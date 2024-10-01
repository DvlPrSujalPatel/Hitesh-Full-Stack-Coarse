// function greet(name){
//     console.log(`Hello ${name}`);
// }

// greet("Sujal")

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea")
// console.log(teaOrder);



function orderTea(teaType){
    function confirmOrder() {
        return `Order confirmed for chai`
    }
    return confirmOrder()
}

let orderConfirmarion = orderTea("chai")
// console.log(orderConfirmarion);



const calculateTotal = (price, quantity) =>  price * quantity;
const total = calculateTotal(499, 100)
// console.log(total);

function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`
}

function processTeaOrder(teaFn){
    return teaFn("earl grey")
}

let order = processTeaOrder(makeTea)
// console.log(order);


function createTeaMaeker(){
    return function(teaType){
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaeker()
console.log(teaMaker("green tea"));