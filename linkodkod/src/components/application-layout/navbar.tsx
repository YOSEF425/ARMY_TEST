import { Link } from "react-router";

export default function Navbar(){
    return(
        <>
        <nav className='Navbar'>

        <Link to="/">Home Page</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Find Post">Find Post</Link>
       
        
        </nav>
        </>
    )
}