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
} while (i <= 10)

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

//OOP JavaScript

let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = '250'
let bookPrice = '20'

/*
const book = {
    title: 'Atomic Habits',
    author: 'James Clear',
    pages: '250',
    price: '20',
    chapters:{
        chapter1: 'Introduction',
        chapter2: 'The Fundamentals of Atomic Habits',
        chapter3: 'How your habits shape your identity',
    },
    printBook: function(){
        console.log(book.price)
    }
}
book.printBook()

for (let key in book.chapters) {
    console.log(key + ': ' + book.chapters[key])
}
*/

// Factory function

function createBook(title, author, pages, price) {
    const book = {
        title: title,
        author: author,
        pages: pages,
        price: price,
        
        printBook: function(){
            console.log('Printing book')
        }
    }
   return book
}

const book1 = createBook('Atomic Habits', 'James Clear', '250', '20')
const book2 = createBook('The 4-hour Workweek', 'Tim Ferriss', '250', '20')
book1.color = 'red'
console.log(book1, book2)


// Constructor function

function CreateBook(title, author, pages, price) {
    this.title = title
    this.author = author
    this.pages = pages
    this.price = price
}

const Book1 = new CreateBook('Atomic Habits', 'James Clear', '250', '20')
console.log(Book1)
delete Book1.price
console.log(Book1)

// Exemplo cliente banco

function ClientBank(nome, idade, cpf, transacao, pix, saldo, situacaoCadastral, situacaoFinanciamento) {
    this.nome = nome
    this.idade = idade
    this.cpf = cpf
    this.transacao = transacao
    this.pix = pix
    this.saldo = saldo
    this.situacaoCadastral = situacaoCadastral
    this.situacaoFinanciamento = situacaoFinanciamento
}
const Client1 = new ClientBank('João', 29, '123.456.789-00', 'Deposito', 'Sim', 1000, 'Ativo', 'Aprovado', 'Atrasado')
console.log(Client1)
//console.log(Client1.pix)

// Build-in objects

console.log(Math.max(2, 32, 21, 9873, 7645, 36414, 21))
console.log(Math.min(2, 32, 21, 9873, 7645, 36414, 21))
console.log(Math.round(2.4))
console.log(Math.PI)
console.log(Date())

// String

let message = "Hey, whats up ?"
console.log(message.startsWith('Hey'))
console.log(message.endsWith('up'))
console.log(message.includes('whats'))
console.log(message.length)

// Template literals

let name = 'João'

const email = 'Hi ' + name + ' he meet is schudeled to 10 am!\n'
const email2 = `Hi ${name} The meet is schudeled to 10 am!`

console.log(email, email2)

// Array

const random = ['Marcos', 1, true]
console.log(random[0])

// Add item em Array

let num = [7,8,9]
num.push(10)
num.unshift(1,2,3)
num.splice(3,0,4,5,6)
console.log(num)

//num.pop()
//num.shift()
//num.splice(3,3)


// Clean an Array

//num =[]
//num.length = 0
//num.splice(0, num.length)

// Concatenando Arrays

let letters = ['a', 'b', 'c']
all = num.concat(letters)
console.log(all)

half = all.slice(3,5)
console.log(half)

// Joining Arrays

let clients = ['João', 'Maria', 'José', 'Pedro']
console.log(clients)
let clientsJoin = clients.join(' ,')
console.log(clientsJoin)

// Organizar de forma Alfabetica

clients.sort()
console.log(clients)
clients.reverse()
console.log(clients)

// Localizando itens dentro de uma Array primitiva

console.log(num.indexOf(8))
console.log(num.includes(21))

// Arrays de referência

const movies = [
    {id:1, title: 'The Matrix', year: 1999, rating: 8.7},
    {id:1, title: 'The GodFather', year: 1972, rating: 9.29},
    {id:1, title: 'Back to the Future', year: 1985, rating: 8.5},
]

console.log(movies.find(function(movie){
    return movie.title === 'The Matrix'
}))

// Arrow Functions

console.log(movies.find(movie => movie.title === 'The Matrix'))

// Filtrando elementos dentro de uma Array 

/*const tempLondon = [18,-2, -13, 1, 3, 0, 11]
const tempPositive = tempLondon.filter(function(value){
    return value >= 0
})

console.log(tempPositive)
*/

// Verificando elementos dentro de uma Array 

const tempLondon = [18,-2, -13, 1, 3, 0, 11]
/*const tempPositive = tempLondon.every(function(value){
    return value >= 0
})

console.log(tempPositive)
*/
const tempPositive = tempLondon.filter(value=> value >= 0)
console.log(tempPositive)

const tempNegative = tempLondon.filter(value=> value < 0)
console.log(tempNegative)

// Hoisting
// Function declaration

movie()

function movie() {
    console.log('The Matrix')
}

// Function expression

const car = function(){
    console.log('BMW')
}
car()

const truck = car
truck()

// Arguments Object 

function priceValue(){
    let totalValue = 0
    for (let value of arguments){
        totalValue += value
    }
    return totalValue
}

console.log(priceValue(2, 3, 4, 5, 6))

function carLoan(loan, rate = 21.5, years=5){
    return(loan * (rate/100) * years )+ loan
}
console.log(carLoan(80000))

