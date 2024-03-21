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

function saleStatus(status, total){
    console.log('Transaction: ' + status + '! Total Amount $' + total)
}


saleStatus('Approved', 200)

function discountCalc(price, discount){
    let total = price - (price * discount /100) 
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
let speed = driver > 120 ? 'above': 'below'

console.log(speed)

//operadores logicos com strings

let temIdadeMinima = false
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor
console.log(podeVotar)

let podeViajar = !podeVotar
console.log(podeViajar)