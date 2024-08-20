import React from "react";
import { testimonials } from "../data/dummydata";
import { FormatQuoteOutlined } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial=()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        
        
        
      
        <div className="testimonials hero">
            <div className="container">
            <Slider {...settings}>
                {testimonials.map((item,i)=>{
                    return(
                        <div key={i} className="box">
                                <i>
                                <FormatQuoteOutlined/>
                                </i>
                                <p>{item.text}</p>
                                <div className="img">
                                    <img src={item.image} alt=""/>
                                </div>
                                <h3>{item.name}</h3>
                                <label>{item.post}</label>
                            
                        </div>
                    )
                })}
                </Slider>
            </div>
        </div>
    )
}



export default Testimonial;