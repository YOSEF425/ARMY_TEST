import { useState } from "react"
import '../../style/findPost.css'
import Post2 from "./post2"

export default function FindPost(){
    const [id,setId] = useState('')
    const[authorName,setAuthorName] = useState('')
    const[url,setUrl] = useState('')
    const[description,setDescription] = useState('')

      
      async function fetchPost(id:any){
        const response = await fetch(`http://localhost:3000/posts/${id}`)
        const data = await response.json();
        setAuthorName(data.name)
        setUrl(data.url)
        setDescription(data.description)

      }


      function handleSubmit(e:any) {
        e.preventDefault();
      }

      function handleChange(e:any) {
        setId(e.target.value);
        fetchPost(id)
      }





    return(
        <>
        <form onSubmit={handleChange}>
        <div className="searchBox">
        <h3>Find post by ID</h3>
        <div>Enter the ID of author in the box:</div>
        <input type="text" className="input"/>
        </div>
        <button type="submit">Search</button>
        </form>
        </>
    )
}