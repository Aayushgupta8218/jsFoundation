//we start loops from here
// let sum = 0;
// let i =1
// while (i<=5) {
//    sum += i
//    i++

// }
// console.log(sum);
//challenges 
//q2
let countdown = []
let j = 5;

while (j > 0) {
  countdown.push(j)
   j--
   
   
}
console.log(countdown);


//q3  do while
// let teaCollection = []
// let tea 
// do {
//   tea =  prompt(`Enter your favourite tea(type "stop" to finish)`)

//   if(tea !== "stop"){
//    teaCollection.push(tea)
//   }
// } while (tea !== 'stop');

//q4
let total = 0 
let k = 1

do {
   total += k 
   k++
} while (k<=3);


//q5
 let multipliedNumbers = []
 let numbers = [2,4,6]
for (let l = 0 ; l < numbers.length ; l++) {
   // takeNumber =  numbers[l] * 2 
   // multipliedNumbers.push(takeNumber)
  multipliedNumbers.push(numbers[l] *2)
}
console.log(multipliedNumbers);

//q6
 let cities = ["paris","new york","tokyo"]
 let cityList = []

 for (let c = 0; c < cities.length; c++) {
   const myCity = cities[c];
   cityList.push(myCity);
   
 }
 console.log(cityList);