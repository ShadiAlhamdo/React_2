import React, { useState } from "react";
import { navlink } from "../data/dummydata";
import { Link } from 'react-router-dom'
import logo from '../data/images/logo.png'
import {  MenuRounded } from "@mui/icons-material";

const Header=()=>{
    const [responsive,setResponsive]=useState(false);
    return(
        <>
        <header>
            <div className="container flexsb">
                <div className="logo">
                    <img src={logo} alt="" data-aos="fade-up"
                       data-aos-anchor-placement="top-center"/>
                </div>
                <div className={responsive?"hideMenu" :"nav"}>
                {navlink.map((links,i)=>{
                    return(
                    <Link to={links.url} key={i}>
                        {links.text}
                    </Link> 
                    )})}
                </div>
                <button className="toggle"onClick={()=>setResponsive(!responsive)}>
                        <MenuRounded className="icon"></MenuRounded>
                </button>
            </div>
        </header>
        </>
    )
}



export default Header;