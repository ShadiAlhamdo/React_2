import React from "react";
import { HashRouter as Router,Switch,Route } from 'react-router-dom';
import Home from "../Home/Home";
import Header from "../Common/Header";
import About from "./About";
import Services from "./Services";
import { Portfolio } from "./Portfolio";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from '../Common/Footer';


const Pages=()=>{
    return(
        <>
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" >
                <Home/>
                </Route>
                <Route exact path="/About" >
                <About/>
                </Route>
                <Route exact path="/Services" >
                <Services/>
                </Route>
                <Route exact path="/Portfolio" >
                <Portfolio/>
                </Route>
                <Route exact path="/Testimonials" >
                <Testimonial/>
                </Route>
                <Route exact path="/Blog" >
                <Blog/>
                </Route>
                <Route exact path="/Contact" >
                <Contact/>
                </Route>
            </Switch>
            <Footer/>
        </Router>

        
        </>
    )
}



export default Pages;