import * as fs from 'fs/promises';
import { json } from 'stream/consumers';








export async function getAllPosts(req,res){
  
    const raw = await fs.readFile('posts.json','utf-8')
    const posts = JSON.parse(raw)
    res.json(posts)
  
 
}

export async function getPostById(req,res){
  
        
    const id = req.params.id
  
    const raw = await fs.readFile('posts.json','utf-8')
    const posts = JSON.parse(raw)
    for(let post in posts){
        if(post[id] === id){
            res.json(post)
        }
        else{
            res.send("There's no ID like that in the DB!")
        }
    }
    
}



export const sayHello = (req,res) => {

    res.send("hello")
}



