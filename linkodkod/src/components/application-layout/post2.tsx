import { useState } from "react"
import '../../style/home.css'
import '../../style/likes.css'

type post = {
    "authorName":string,
    "url": string,
    "description":string
   
}

export default function Post2({authorName,url,description}:post){
    const[likes,setLikes] = useState(0)
    const[dislikes,setDislikes] = useState(0)
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    
    const addLike = () => {
        setLikes(likes + 1)
    }

    const subLike = () => {
        setDislikes(dislikes + 1)
    }

    return(
        <>

        <div className="post">
         <img src={url} alt="tesla img"/>
         <div>
            <div className="poster">posted by {authorName}</div>
            {description}
         </div>
         <div>Posted at {showTime}</div>
         <div className="likes">Likes: {likes} Dislikes:{dislikes}</div>
         
         <button onClick={addLike}>Like</button>
         <button onClick={subLike}>Dislike</button>
         </div>
        

        </>
    )
}