import React from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home/home";
import Curriculum from "../Pages/Curriculum/curriculum";
import Contact from "../Pages/Contact/contact";
import Project from "../Pages/Project/project";
import Sucess from "../Pages/Contact/sucess";

import { AnimatePresence } from "framer-motion";
export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project />} />
                <Route path="/sucess" element={<Sucess />} />
            </Routes>
        </AnimatePresence>
            
    )
}