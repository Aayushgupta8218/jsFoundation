//promises ::
//we can manually create a delayed function using promises 
// need new keyword to create a promise 
function fetchData() {
   return new Promise((resolve , reject)=>{
      setTimeout(() => {
         let success = true
         if(success){
            resolve("Data fetched successfully")
         }else{
            reject("compilation failed : error fetching fata ")
         }
      }, 5000);
   })
}
//how to consume promise 

fetchData()
   .then((data)=> console.log(data))
   
   .catch((error)=>console.error(error))