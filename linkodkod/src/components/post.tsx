import { useState } from "react"

export default function Post(){
  const [file, setFile] = useState(null);
  const [imgUrl,setImageUrl]  = useState('')
  const[description,setDescription] = useState('')
  const[likes,setLikes] = useState('')
  const[name,setName] = useState('')
  const date = new Date();
  const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    

    
    
         
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
        <h3>Upload your Post here!</h3>
        <form>
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
              <h2>Add Image:</h2>
          
            

                
                
            

            <p>Posted at:{showTime}</p>
            


        </form>
        
        </>
    )
}