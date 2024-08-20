import React from "react";
import { project } from "../data/dummydata";
import CountUp from "react-countup";



const Counter=()=>{
    return(
        <div className="hero counter">
            <div className="container grid3 grid4">
                {project.map((val,i)=>{
                    return(
                        <div className="box" data-aos="zoom-in-up">
                            <i>{val.icon}</i>
                            <h1 className="heading"><CountUp enableScrollSpy duration={2} end={val.num}/></h1>
                            <h3>{val.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export default Counter;