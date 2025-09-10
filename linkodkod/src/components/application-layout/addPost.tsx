import { useState } from "react"
import Navbar from "./navbar";

export default function AddPost(){
  const [file, setFile] = useState(null);
  const [imgUrl,setImageUrl]  = useState('')
  const[description,setDescription] = useState('')
  const[name,setName] = useState('')
  const date = new Date();
  const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    

    function handleSubmit(){
        fetch('http://localhost:3000/addPost'),{
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({"url":imgUrl,"description":description,"name":name})
    };
    }
    
    
         
    function handleName(e:any){
        setName(e.target.value)
    }

    function handleDescription(e:any){
        setDescription(e.target.value)
    }

    function handleUrl(e:any){
        setImageUrl(e.target.value)
    }
  
    return(
        <>
        <Navbar/>
        <h3>Upload your Post here!</h3>
        <form action="https://localhost:3000/addPost" onSubmit={handleSubmit}>
            <h3>Enter your name</h3>
                <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={handleName}
                />
            <h3>Please copy the image link here</h3>
                <input
                type="text"
                value={imgUrl}
                onChange={handleUrl}
                placeholder="image link"
                />
            <h3>Add a description here</h3>
                <input
                type="text"
                value={description}
                onChange={handleDescription}
                placeholder="description"
            />
             
              <button type="button" 
                id="submitButton">
              Submit
          </button>
            


        </form>
        
        </>
    )
}