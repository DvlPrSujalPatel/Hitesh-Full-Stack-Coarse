let computer = { cpu: 12 }

let lenovo = { 
    screen: 'OLED',
    __proto__: computer
}

let macbook = {}

console.log(`lenovo`, lenovo.__proto__);
