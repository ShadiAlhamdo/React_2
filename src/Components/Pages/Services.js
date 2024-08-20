import React from "react";
import Heading from "../Common/Heading";
import { services } from "../data/dummydata";



const Services=()=>{
    return(
        <div className="services">
        <div className="container">
            <Heading title="Services"/>
            <div className="content grid3">
            {services.map((val,i)=>{
                return(
                    <>
                    <div  className="box"data-aos="zoom-in">
                        <i>{val.icon }</i>
                        <h3>{val.title}</h3>
                        <p>{val.desc}</p>
                    </div>
                    </>
                )
            })}
            </div>
        </div>
        
        </div>
    )
}



export default Services;