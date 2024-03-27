// console.log("JavaScript funcionando!")

// let firstName = 'João';
// let lastName = 'Souza';

// console.log(firstName, lastName,)

let age = 29;
age = 30;
// console.log(age)

let itemName = 'pen'
let price = 3
let itemAvailable = true
let itemColor = null

console.log(typeof price)
console.log(itemName, price, itemAvailable, itemColor)

let pen = {
    itemName: 'pen',
    price: 3,
    itemAvailable: true,
    itemColor: 'blue'
}

pen.itemColor = 'red'
console.log(pen)
console.log(pen.itemName)


// Arrays

let cars = ['Gol', 'Uno', 'Palio', 'Tipo', 'Celta', 'Onix']
console.log(cars[1])
cars[1] = 'Fiesta'
console.log(cars)

//Functions

function saleStatus(status, total) {
    console.log('Transaction: ' + status + '! Total Amount $' + total)
}


saleStatus('Approved', 200)

function discountCalc(price, discount) {
    let total = price - (price * discount / 100)
    return total
}


let discountValue = discountCalc(200, 15)
console.log(discountValue)

//Operadores aritmeticos

let num1 = 1
let num2 = 2

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)
console.log(Math.sqrt(25))

//Operadores de atribuiçao

let num3 = 10

console.log(num3 += 20)
console.log(num3 -= 20)
console.log(num3 *= 20)
console.log(num3 /= 20)

//Operadores de comparaçao

let num4 = 10

console.log(num4 > 0)
console.log(num4 < 0)
console.log(num4 >= 10)
console.log(num4 <= 10)

console.log(num4 != 10)
console.log(num4 == 10)

//Operadores de igualdade

let num5 = 1
let num6 = '1'

console.log(num5 == num6)
console.log(num5 === num6)

// operadores ternários

let driver = 120
let speed = driver > 120 ? 'above' : 'below'

console.log(speed)

//operadores logicos com strings

let temIdadeMinima = false
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor
console.log(podeVotar)

let podeViajar = !podeVotar
console.log(podeViajar)

// operadores lógicos com string

let corCliente = undefined
let corEstoque = 'black'
let corVendida = corCliente || corEstoque

console.log(corVendida)

// precedencia de operadores

let num7 = (3 + 4) * 2

// If ... Else

let driverSpeed = 101

if (driverSpeed > 100) {
    console.log('Above speed limit!')
} else if (driverSpeed >= 60 && driverSpeed <= 100) {
    console.log('Normally speed!')
}
else {
    console.log('Below speed limit!')
}

// Switch case

let airportName = 'MCO'
switch (airportName) {
    case 'MCO':
        console.log('Orlando International Airport')
        break
    case 'GRU':
        console.log('São Paulo International Airport')
        break
    case 'Lax':
        console.log('Los Angeles International Airport')
        break
    case 'LAS':
        console.log('Las Vegas International Airport')
        break
    default:
        console.log('Airport not found!')
        break
}

// For loop

for (let i = 1; i <= 10; i++) {
    console.log('Item: ' + i)
}

// While loop

// let i = 1
// while(i <= 10){
//     console.log('Numero: ' + i)
//     i++
// }

//Do while loop

let i = 1
do {
    console.log('Numero: ' + i)
    i++
}while(i <= 10)

// For in loop

const Mycar = {
    model: 'Bmw',
    year: '2020',
    color: 'White',
    km: 68000
}

for (let key in Mycar) {
    console.log(key + ': ' + Mycar[key])
}

// For of loop

const friends = ['João', 'Maria', 'José', 'Pedro']

for (let friend of friends) {
    console.log(friend)
}

