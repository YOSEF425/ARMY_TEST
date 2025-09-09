import Slogen from './slogen.tsx'
import Logo from './logo.tsx'
import '../../style/home.css'
import Post2 from './post2.tsx'
import AllPosts from './allPosts.tsx'



export default function Home(){

   
    return(
        <div>
          <div className='topLine'>
          <div className='logo'>
           <Logo/>
           </div>
           
            <div className='slogan'>
           <Slogen/>
           </div>
           </div>
            <AllPosts/>
           

         
          
      
        </div>
    )
}