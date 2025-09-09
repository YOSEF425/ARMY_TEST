 async function allPosts(){
        const response = await fetch('http://localhost:3000/getAllPosts')
        const data = await response.json()
        console.log(data)

    }

allPosts();