import { useState } from "react"
import '../style/home.css'
import Post2 from "./post2"

export default function Home(){
    const [logo,setLogo] = useState('https://lh3.googleusercontent.com/drive-storage/AJQWtBNgz56M2ll7koj8FJ57ab8oBRkLKbJyPIwhtcVGOuZ7BIzqrspbCKxVAYtEmqWjZuFbmp5YtocSihMkqUXW-J3rVSJN5frINW5UvLiBe9l5Pg=w1909-h885?auditContext=forDisplay')

    const post = {
        "url":"https://tse1.mm.bing.net/th/id/OIP.OoKvKUPuOpqOJIu6FgqvjAHaFG?w=263&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        "description":"Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus). They are the only surviving members of the family Elephantidae and the order Proboscidea; ",
        likes:0,
        "name":"yosef"
    }
    return(
        <div>
           <div className="topLine">
            <h3 className="title">Welcome to Linkodkod</h3>
            <img src={logo} alt="logo" className="logo"/>
            </div>
            <Post2 name="yosef" url="https://tse1.mm.bing.net/th/id/OIP.OoKvKUPuOpqOJIu6FgqvjAHaFG?w=263&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" description="
            Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus). They are the only surviving members of the family Elephantidae and the order Proboscidea" />
            
            <Post2 name="yosef" url="https://uat3.carparisonleasing.co.uk/media/cache/blog_detail_image_1170/cc-uploads/d87aaae4/Tesla%20Model%20Y%20driving.jpg" description="Get the latest Tesla News: breaking news and insight on the Model 3, Model X, Model S, the Gigafactory, Tesla Energy, and more. We even cover SpaceX!"/>
        </div>
    )
}