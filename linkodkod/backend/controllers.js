import * as fs from 'fs/promises';
import { json } from 'stream/consumers';








export async function getAllPosts(req,res){
  
    const raw = await fs.readFile('posts.json','utf-8')
    const posts = JSON.parse(raw)
    
    res.json(posts)
  
 
}




export const sayHello = (req,res) => {

    res.send("hello")
}



