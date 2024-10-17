//Number

let balance = 120;
let anotherBalance = new Number(120)
// console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);


//boolean
let isActive = true
let isReallyActive = new Boolean(true) //not recommended

//null and undefined 

let firstname;
// firstname = "aayush"
firstname = null
console.log(firstname)


//string
let myString = "hello"
let myString1 = 'hola'
let myString2 = 'hitesh'

let oldGreet = myString + " histesh"
console.log(oldGreet);

let greet = `HELLO ${myString2} !`
console.log(greet);

//symbol gives u a unique value 

let sm1 = Symbol("hitesh")
let sm2 = Symbol("hitesh")
console.log(sm1 == sm2);
