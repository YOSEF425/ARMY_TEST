import { useState } from "react"



export default function Logo(){
    const [logo,setLogo] = useState('https://lh3.googleusercontent.com/drive-storage/AJQWtBPpfdU2_CIFnL2-IsK8OK7bcAv1pfoXeRLE61JLb0jwH5QhKm4VIDYQ0I10iuKbl1oCkJjpa-eocsywo2GEQVC3-sYtUJo2QgX5Q7TAZdYBd44=w1909-h885')
    
    return(
        <>
            <img src={logo} alt="logo" className="logo"/>
        </>
    )
}