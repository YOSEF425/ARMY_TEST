import { useState } from "react"
import '../../style/findPost.css'
import Post2 from "./post2"
import Navbar from "./navbar"

export default function FindPost(){
    const[found,setFound] = useState(false)
    const[id,setId] = useState('')
    const[authorName,setAuthorName] = useState('')
    const[url,setUrl] = useState('')
    const[description,setDescription] = useState('')
    const[error,setError] = useState('')

     function handleSubmit(e:any) {
        e.preventDefault();
      }
     
 
     const handleInputChange = (e:any) => {
    setId(e.target.value);
  };

      async function fetchPost(e:any){  
        
                                                          // fetches post by id
        try{
          const response = await fetch(`http://localhost:3000/posts/${id}`)
          console.log("hi")
          if (!response.ok) throw new Error("Failed to fetch data");
  
          const data = await response.json();
          setAuthorName(data.name)
          setUrl(data.url)
          setDescription(data.description)

        }catch(error){
          
          setError("error")
        }
        if(error){
          return <p>error</p>
        }
        else{
          return <div>
            <Post2 id={id} authorName={authorName} url={url} description={description}></Post2>
          </div>
        }
      }



     
       
       





    return(
        <>
        <Navbar/>
        <div className="searchBox">
        <h3>Find post by ID</h3>
        <div>Enter the ID of author in the box:</div>
        <input type="text" value={id} onChange={handleInputChange} placeholder="ID" className="input"/>
        </div>
        <button onClick={fetchPost}>Search</button>
        
        </>
    )
}