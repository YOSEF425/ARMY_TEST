import Slogen from './slogen.tsx'
import Logo from './logo.tsx'
import '../../style/home.css'
import AllPosts from './allPosts.tsx'
import Navbar from './navbar.tsx'



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
           <Navbar/>
            <AllPosts/>
           

         
          
      
        </div>
    )
}