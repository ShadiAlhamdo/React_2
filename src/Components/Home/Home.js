import React from "react";
import Hero from "./Hero";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Counter from "../Pages/Counter";
import { Portfolio } from "../Pages/Portfolio";
import Testimonial from "../Pages/Testimonial";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Footer from "../Common/Footer";


const Home=()=>{
    return(
        <div>
        
        <Hero/>
        <About/>
        <Services/>
        <Counter/>
        <Portfolio/>
        <Testimonial/>
        <Blog/>
        <Contact/>
     
        </div>
    )
}



export default Home;