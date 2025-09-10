import * as fs from 'fs/promises';








export async function getAllPosts(req,res){
  
    const raw = await fs.readFile('posts2.json','utf-8')
    const posts = JSON.parse(raw)
    res.json(posts)
  
 
}


export async function getPostById(req,res){
   
      let id =""
      id = req.params.id
      let posts = []
      let found = false
      
    
     
       const raw = await fs.readFile('posts2.json','utf-8')
       posts = await JSON.parse(raw)
       
       
     
        for(let index = 0; index < posts.lenght ; index ++){
            if(posts[index][0] === id){
                found = true
                break
            }
        }

        if(found){
            res.send(posts[index])
        }else{

            res.send("Could'nt find ID!")
        }


}



export const sayHello = (req,res) => {

    res.send("hello")
}



