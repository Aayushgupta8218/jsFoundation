//they are functions that remember the enviroment they were created in

function outer () {
   let counter = 4
   return function () {
      counter ++
      return counter
   }
}
let increment = outer()
console.log(increment());