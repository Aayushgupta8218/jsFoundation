//higher order functions 
//q5
function makeTea(typeOfTea){
 return `maketea:${typeOfTea}`
}
function processTeaOrder (teaFunction){
 return teaFunction('earl grey')
}
 let order = processTeaOrder(makeTea)
//  console.log(order);


 //q6
 
 function createTeakMaker(){
   return function(TeaType){
      return `making ${TeaType}`
   }
 }

 let teaMaker = createTeakMaker()
//  console.log(teaMaker('green tea'))
let result = teaMaker('green tea ')
console.log(result)