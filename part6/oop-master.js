 function createCar(make, model) {
  this.make = make
  this.model = model
}




//how to create a class
 class Vehicle {
   constructor(make,model){  //constructor always use 
      this.make = make
      this.model = model
   }
   start(){
      return `${this.model} is a car from ${this.make}`
   }
 }

 class Car extends Vehicle {
   drive(){
      return `${this.make}:This is an inheritane example`
   }
 }
 let myCar = new Car("toyota","corolla")
//  console.log(myCar.start());
//  console.log(myCar.drive());


 let vehOne = new Vehicle ("toyota","corolla")
//  console.log(vehOne.make);



 //encapsulation
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


   //ABSTARCTION: HIDES THE COMPLEX IMPLEMENTATION DETAILS
   
   class CoffeMachine{
      start(){
         //call DB
         return `starting the machine...`
      }
      brewCoffee(){
         //complex complication
         return `brewing coffee`
      }
      pressStartButton(){
        let msg1 =  this.start()
         let msg2 = this.brewCoffee()
         return `${msg1} + ${msg2}`
      }
   }
   let myMachine = new CoffeMachine()
   // console.log(myMachine.start());
   // console.log(myMachine.brewCoffee);
   // console.log(myMachine.pressStartButton());


   //POLYMORPHISM:
   
   class Bird{
      fly(){
         return `flying...`
      }
   }
   class Penguin extends Bird {
      fly(name){
         return `${name} , penguins cant fly`
      }
   }
   let bird = new Bird()
   let penguin = new Penguin()
   // console.log(bird.fly());
   // console.log(penguin.fly("ramesh"));

   //Static method
   class Calculator {
      static add(a,b){
         let sum = a+b
         return sum
      }
   }
   // console.log(Calculator.add(2,3));

   //getters and setters 

   class Employee{
      #salary;
      constructor(name,salary){
         if (salary<0) {
            throw new Error("salary cant be a negative ")
         }
         this.name = name
         this.#salary = salary
      }
      get salary(){
         return `you are not allowed to see salary`;
      }

      set salary(value){
         if (value<0) {
            console.error("invalid salary")
         }else{
            this._salary = value
         }
      }
   }
   let employee = new Employee("alice",5000)
   console.log(employee.salary);
   employee.salary = 60000