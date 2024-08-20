import React from "react";
import Heading from "../Common/Heading";
import { contact } from "../data/dummydata";


const Contact=()=>{
    return(
        <div className="contact">
            <div className="container">
                <Heading title='Keep In Touch'/>
                <div className="content flexsb">
                    <div className="right"data-aos="zoom-out-right">
                        <form >
                            <div className="flex">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <input type="text" placeholder="Subject"/>
                            <textarea cols='30'rows='10'placeholder="Type Here"></textarea>
                            <button>Submit </button>
                        </form>
                    </div>
                    <div className="left"data-aos="zoom-out-left">
                        {contact.map((val,i)=>{
                            return(<div className="box">
                                        <i>{val.icon}</i>
                                        <p>{val.text1}</p>
                                        <p>{val.text2}</p>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact;