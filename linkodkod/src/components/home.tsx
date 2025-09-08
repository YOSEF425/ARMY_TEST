import Slogen from './application-layout/slogen.tsx'
import Logo from './application-layout/logo.tsx'
import '../style/home.css'



export default function Home(){

   
    return(
        <div>
          <div className='logo'>
           <Logo/>
           </div>
           
            <div className='slogan'>
           <Slogen/>
           </div>

           

         
          
      
        </div>
    )
}