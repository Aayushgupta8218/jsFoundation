//how to design a prototype

let computer = {cpu :12}
let lenovo = {screen:"HD", __proto__:computer}
let tomHardware = {}

// console.log(`lenovo`,lenovo.__proto__); //__ = dunder

let genericCar = {tyres:4}
let tesla = {
   driver:"AI"
}
 Object.setPrototypeOf(tesla,genericCar)
 console.log(`tesla` , Object.getPrototypeOf(tesla)); //better than saying dunder prototype  
 