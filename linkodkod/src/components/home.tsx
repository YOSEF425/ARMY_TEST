import { useState } from "react"
import '../style/home.css'

export default function Home(){
    const [logo,setLogo] = useState('https://lh3.googleusercontent.com/drive-storage/AJQWtBNgz56M2ll7koj8FJ57ab8oBRkLKbJyPIwhtcVGOuZ7BIzqrspbCKxVAYtEmqWjZuFbmp5YtocSihMkqUXW-J3rVSJN5frINW5UvLiBe9l5Pg=w1909-h885?auditContext=forDisplay')
    return(
        <div>
           <div className="topLine">
            <h3 className="title">Welcome to Linkodkod</h3>
            <img src={logo} alt="logo" className="logo"/>
            </div>
            
        </div>
    )
}