import React from "react";
import { home } from "../data/dummydata";
import Typewriter from 'typewriter-effect';

const Hero=()=>{
    return(
        <section className="hero">
            {home.map((val,i)=>{
                return(
                <div className="heroContent">
                    <h3>{val.text}</h3>
                    <h1>
                        <Typewriter className="typewirter"   options={{strings: [`${val.name}`,`${val.post}`,`${val.desc}`],autoStart:true,loop:true}}></Typewriter>
                    </h1>
                    <p>{val.desc}</p>
                    <button className="primaryBtn">DOWNLOAD CV</button>
                </div>
                
                )})}
        </section>
    )
}



export default Hero;