//promise ka hi part hai but differnt way of consuming the promises 

function fetchUserData(){
         return new Promise((resolve,reject)=>{
            setTimeout(() => {
               resolve({name:"chaicode",url:"https://chaicode.com"})
            }, 3000);
         })
}

async function getUserData(){
   try {
      console.log("fetching user data ...");
     const userDara =  await fetchUserData() 
     console.log("User data fetched successfully ");
     console.log("USER DATA",userDara);
   } catch (error) {
      console.log("error fetching data ",error)
   }
}
getUserData()