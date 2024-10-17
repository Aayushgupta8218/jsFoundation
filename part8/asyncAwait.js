function fetchPostData (){
   return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve("post data")
      },2000)
   })
}


function fetchCommentData(){
   return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve("comment data fetched succesfully!!")
      },3000)
   })
}

async function getBlogData(){
   try {
      console.log("fetching log data ..");
    const [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()])
      // const blogData = await fetchPostData()
      // const commentData =  await fetchCommentData()
      console.log(postData);
      console.log(commentData);
   } catch (error) {
      console.error("failed to complie the blog data ")
   }
}

getBlogData()