import * as fs from "fs/promises";
import client from "./MONGO_DB/connectMongo.js";
import { connectToMongo } from "./MONGO_DB/connectMongo.js";

await connectToMongo();      //  database for new posts
const posts = client.db("myDatabase").collection("posts");

export async function getAllPosts(req, res) {               // get all posts
  const raw = await fs.readFile("posts2.json", "utf-8");
  const posts = JSON.parse(raw);
  res.json(posts);
}

export async function getPostById(req, res) {              
                                                                // Function deals with fetching post by id

  let id = "";
  id = req.params.id;
  let found = false;
  let p = {}

  const raw = await fs.readFile("posts2.json", "utf-8");
  let posts = await JSON.parse(raw);

     for (let post of posts) {

        if (post.id === id) {
          p = post
          found = true
          break;
        }
     }
     if(found){
       res.send(p);
     }
 
    
    
   
    

  res.send("couldnt find id")
}

export function addPost(req, res) {
                                                                       // function adds new post to mongo_db
  const { id, name, url, description } = req.body;

  const newPost = {
    id: id,
    authorName: name,
    url: url,
    description: description,
    createdAt: new Date(),
  };
  try {
    posts.insertOne(newDoc);
    res.status(201).send("Post added to database!");
  } catch (error) {
    res.status(500).send(`Error uploading Post to DB: ${error.message}`);
  }
}
