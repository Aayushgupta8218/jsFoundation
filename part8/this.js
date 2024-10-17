//this keyword 
const person = {
   name:"hitesh",
   greet(){
      console.log(`hi i am ${this.name}`);
   }
}
person.greet()

const greetFunction = person.greet
greetFunction()

const boundGreet = person.greet.bind({name:"jhon"})
boundGreet()