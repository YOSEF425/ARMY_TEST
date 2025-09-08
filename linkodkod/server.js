import express from 'express'
import fs from 'fs'


const app = express();

const posts = []

fs.readFile("./posts.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  try {
    const posts = JSON.parse(jsonString);
    console.log(posts)
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});



app.listen(3000,() => {
    console.log('server listening on port 3000')
})