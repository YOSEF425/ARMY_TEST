// import Post2 from "./post2"
// import '../../style/allPosts.css'
// import { useState } from "react"





// export default function AllPosts2(){

//     type post = {
//     "id":string,
//     "authorName":string,
//     "url": string,
//     "description":string
// }

//     const[posts,setPosts] = useState([])
    
//    async function fetchPosts(){
//         const response = await fetch('http://localhost:3000/getAllPosts')
//         const data = await response.json()
//         setPosts(data)

//     }
          
    
//     fetchPosts();
    

//     return(
//        <>
//               {
               
//                 posts.map((post,index) => (
//                     <Post2 key={index} id={post.id} authorName={post.authorName} url={post.url} description={post.description}/>
                        
                    
//                 ))
                
//             }
//         </>
//     )
// }