// console.log("hello from class constructor");
//this and new have an internal linking they have to go together

 function Person(name,age) {
  this.name = name   
  this.age = age
 }

 function Car(make,model) { //in order to create an object you have to have to use the keyword new 
   this.make = make
   this.model =model
 }

 let myCar = new Car("Toyota",'Camry')
//  console.log(myCar);
 
 let myNewCar = new Car("tata","safari") //important to use the new keyword 
//  console.log(myNewCar);


function Tea(type) {
   this.type = type
   this.describe = function(){
      return `this is a cup of tea ${this.type}`
   }
   
}
 let lemonTea = new Tea("lemon tea")
//  console.log(lemonTea.describe());


function animal(species) {
   this.species = species
}

animal.prototype.sound =  function () {
   return `${this.species} makes a sound`
}
let dog = new animal("dog")
// console.log(dog.sound())
let cat = new animal("cat")
// console.log(cat.sound())


function Drink(name){
   if (!new.target) {
      throw new Error("Drink must be called with new keyword")
   }
   this.name = name
}

let tea = new Drink("tea")
let coffee = Drink("coffee")
