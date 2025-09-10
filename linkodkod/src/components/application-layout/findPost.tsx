import { useState } from "react"
import '../../style/findPost.css'
import Post2 from "./post2"

export default function FindPost(){
    const[found,setFound] = useState(false)
    const [id,setId] = useState('')
    const[authorName,setAuthorName] = useState('')
    const[url,setUrl] = useState('')
    const[description,setDescription] = useState('')

     function handleSubmit(e:any) {
        e.preventDefault();
      }


      async function fetchPost(id:any){
        try{
          const response = await fetch(`http://localhost:3000/posts/${id}`)
  
          const data = await response.json();
          console.log(data)
          setAuthorName(data.name)
          setUrl(data.url)
          setDescription(data.description)
          console.log(data)

        }catch(error){
          console.log("no")

        }
      }


     
      function handleChange(e:any) {    // When user clicks the "search" button the useState is set to that value
                                       //  and we fetch the endpoint of that id.
        setId(e.target.value);
        console.log(id)
        fetchPost(id)
      }





    return(
        <>
        
        <div className="searchBox">
        <h3>Find post by ID</h3>
        <div>Enter the ID of author in the box:</div>
        <input type="text" name="id" title="ID" placeholder="ID" className="input"/>
        </div>
        <button onClick={handleChange}>Search</button>
        
        </>
    )
}