import { Link } from "react-router";
import '../../style/navbar.css'

export default function Navbar(){
    return(
        <>
        <nav className='Navbar'>

        <Link to="/" className="btn">Home Page</Link>
        <Link to="/FindPost">Find Post</Link>
        <Link to="/AddPost">Add Post</Link>
       
        
        </nav>
        </>
    )
}