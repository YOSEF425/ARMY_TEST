import { useState } from "react"
import '../style/post.css'
import '../style/likes.css'

type post = {
    "url": string,
    "name":string,
    "description":string
   
}

export default function Post2({name,url,description}:post){
    const[likes,setLikes] = useState(0)
    
    const addLike = () => {
        setLikes(likes + 1)
    }

    const subLike = () => {
        setLikes(likes - 1)
    }

    return(
        <>

        <div className="post">
         <img src={url} alt="tesla img"/>
         <div>
            <div className="poster">posted by {name}</div>
            {description}
         </div>
         <div className="likes">Likes: {likes}</div>
         
         <button onClick={addLike}>+</button>
         <button onClick={subLike}>-</button>
         </div>
        

        </>
    )
}