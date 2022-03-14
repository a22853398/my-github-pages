import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Tool from "./tool/Tool";
import Kura from "./kura/Kura";



function Content(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/tool" element={<Tool />}/>
                <Route path="/kura" element={<Kura />}/>
            </Routes>
        </div>
    );
};
export default Content;