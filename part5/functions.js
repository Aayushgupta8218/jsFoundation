//functions:

//q1
function makeTea(typeOfTea) {
   return `making ${typeOfTea}`
}
 const teaOrder = makeTea("green tea")
//  console.log(teaOrder);


 //q2

 function orderTea(teaType) {
   function confirmOrder() {
      return `order confirmed for ${teaType}`
   }
   return confirmOrder()
   
 }
 let orderConfirmation = orderTea('chai')
//  console.log(orderConfirmation);


 //q3

 const calculateTotal = (price,quantity) => {
   return price * quantity
 }
 let totalCost = calculateTotal(4,5)
 console.log(`the total cost is ${totalCost}`);


 //q4
 