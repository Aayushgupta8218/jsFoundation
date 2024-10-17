// console.log("ji");

//declare an array named tea flavour that contains the string 

let teaFlavour = ["green tea","black tea","oolong tea"]
 const firstTea = teaFlavour[0]
 console.log(firstTea);

 //question 2 
let cities = new Array("london","tokyo","paris","new york")
const favoriteCity = cities[2]
console.log(favoriteCity);

//q3
let teaTypes = ["hearbal tea","white tea","masala chai"]
teaTypes[1]= "jasmine tea"
console.log(teaTypes);
//q4
let citiesVisited = ["Mumbai","sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited)  //push adds an element in the array at the very end of it 
//q5
let teaOrders = ["chai","iced tea","matcha","earl grey"]
 const lastOrder = teaOrders.pop() //pop removes the last element of the array 
 console.log(teaOrders);
 //q6//creating soft copy 
 let popularTeas = ["green tea" , "oolong tea" , "chai"]
//  let var1 = 5;
//  let var2 = var1
let softCopyTeas = popularTeas
// popularTeas.pop()
console.log(softCopyTeas);
console.log(softCopyTeas);
//q7 //hardcopy
let topCities = ["berlin","singapore","tokyo"]
let hardCopyCities = topCities.slice()
// let hardCopyCities = [...topCities] //the three dots means that this is now a hardcopy array of the topCities //also called spread operator 
topCities.pop()
console.log(hardCopyCities);
console.log(topCities);
//another way 


//q8
let eueopeanCities = ["paris", "rome,"]
let asianCities = ["tokyo","bangkok"]
const worldCities = eueopeanCities.concat(asianCities) //concatination
// let worldCities = eueopeanCities + "" + asianCities
console.log(worldCities);
console.log(typeof worldCities);

//another method is concatination


//q9
let teaMenu = ["masala chai","oolong tea","green tea","earl grey"]
const menuLength = teaMenu.length
console.log(menuLength);

//q10

let cityBucketList = ["kyoto","london","capetown","vancouver"]
let isLondonList = cityBucketList.includes("london")
console.log(isLondonList);