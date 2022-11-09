import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/login";

export default function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element= {<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}