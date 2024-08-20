import React from "react";
import { social } from "../data/dummydata";


const Footer=()=>{
    return(
       <footer>
        {social.map((val,i)=>{
           return(<>
                    
                    <i>{val.icon}</i>
                    
                    </>)
        })}
        <p>All Right Reserved {new Date().getFullYear()}</p>
       </footer>
    )
}



export default Footer;