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
