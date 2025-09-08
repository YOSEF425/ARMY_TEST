import fs from 'fs/promises'


async function readFile() {
  let parsed = []
  try {
    const data = await fs.readFile('posts.json', 'utf8');
    parsed = await (JSON.parse(data))
    return parsed

  } catch (error) {
    console.error('Error reading file:', error);
    return
  }
}





export const getAllPosts = (req,res) => {
    
    res.send(readFile())
}


export const sayHello = (req,res) => {
    res.send("hello")
}

