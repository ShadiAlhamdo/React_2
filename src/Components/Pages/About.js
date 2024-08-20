import React from "react";
import { about } from "../data/dummydata";
import Heading from "../Common/Heading";


const About=()=>{
    return(
        <section className="about">
       <div className="container flex">
        {about.map((val,i)=>{
            return(
                <>
                <div className="left"data-aos="fade-up-left">
                    <img src={val.cover} alt=''/>
                </div>
                <div className="right"data-aos="fade-up- right">
                    <Heading title='About Me'/>
                    <p>{val.desc}</p>
                    <p>{val.desc1}</p>
                    <div className="catButton">
                    <button className="primaryBtn">DOWNLOAD CV</button>
                    <button className="">DOWNLOAD CV</button>
                    </div>
                
                </div>
                </>
            )
        })}
       </div>
    </section>
    )
}



export default About;