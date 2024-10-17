// //q1
// let teaCollection = ["green tea","black tea","chai","oolong tea"]
// let selectedTea = []

// for (let j = 0; j < teaCollection.length; j++) {
//    if (teaCollection[j] === "chai") {
//       break; //breaks the loop
//    }
//    selectedTea.push(teaCollection[j])

   
// }
// // console.log(selectedTea);

// //q2
// let cities = ["london","newyork","paris","berlin"]
// let visitedCities = []
// for (let k = 0; k < cities.length; k++) {
//    if (cities[k] === "paris") {
//       continue; // this keyword helps in skipping the element paris
//    }
//    visitedCities.push(cities[k])
   
// }
// // console.log(visitedCities);


// //q3 //for of loop 
// let numbers = [1,2,3,4,5]
// let smallNumbers = []

// for (const num of numbers) {
//    if (num === 4) {
//       break
//    }
//    smallNumbers.push(numbers)
// }


// //q4
// let tea = ["chai","green tea","herbal tea" ,"black tea"]
// let prefferedTea = []

// for (const teaTypes of tea) {
   
//    if (teaTypes === "herbal tea") {
//       continue;
      
//    }

//    prefferedTea.push(tea)
   
// }
// // console.log(prefferedTea);


// //q5 //for- in loop

// let citiesPopulation = {
//    london: 890000,
//    newyork: 840000,
//    paris:222000,
//    berlin:350000
// }
// let cityPopulations = {}

// for (const city in citiesPopulation) {
//   if (city == "berlin") {
//    break
//   }
//    cityPopulations[city] = citiesPopulation[city]
// }
// // console.log(cityPopulations);


// // q6

// let worldCities = {
//    "sydney": 50000,
//    "tokyo":90000,
//    "berlin":35000,
//    "paris":22000,
// }
// let largeCities = {}

// for (const city in worldCities) {
//    if (worldCities[city]<35000) {
//       continue
      
//    }
//    largeCities[city] = worldCities[city]
// }
// // console.log(largeCities)


//q7 for each

let beverage = ["earl grey", "green tea","chai","oolong tea"]
let availableTea = []

beverage.forEach(function(tea){
   if (tea === 'chai') {
      return
   }
   availableTea.push(beverage)
});
//  console.log(availableTea);


//q8

let places = ["berlin","tokyo","sydney","paris"]
let traveledPlaces = []

places.forEach(function(town){
   if (town === 'sydney') {
      return 
      
   }
   traveledPlaces.push(places)
})
console.log(traveledPlaces);
