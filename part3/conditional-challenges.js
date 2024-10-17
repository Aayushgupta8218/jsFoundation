const { Long } = require("mongodb");

//checking if a number is greater than another number 
let num1 = 5 
let num2 = 8
if (num2<num1) {
   console.log(`${num2} is greater than ${num1}`)
   
}else{
   console.log(`${num2} is not greater than ${num1}`);
}

////checkin if A STRING IS EQUAL TO ANOTHER STRING

let username = "chai"
let anotherUser = "chai"
if (username != anotherUser) {
  console.log(`${username} is equal to ${anotherUser}`);   
}else{
   console.log("you can pick another username ")
}

//checking if a variable is a number or not 
let score = 44;
let anotherScore = 66
if (typeof score === typeof anotherScore) {
   console.log("you are correct in assigning the values ");
   
}else{
   console.log("you better get your concepts right ");
}

//checking if the boolean value is true or false:
let isTeaReady = false
if (isTeaReady) {
   console.log("tea is ready ");
   
}else{
   console.log("tea is not ready");
}

//check if array is empty or not 

let items = ["item2"];
console.log(items.length)

if (items.length === 0) {
   console.log("array is empty");
   
}else{
   console.log("array is NOT EMPTY ");
}