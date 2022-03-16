import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Tool from "./tool/Tool";
import Kura from "./kura/Kura";



function Content(){
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="/tool" element={<Tool />}/>
                <Route exact path="/kura" element={<Kura />}/>
            </Routes>
        </div>
    );
};
export default Content;