import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";


import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Rotas from "./Rotas";
import Footer from "../components/templates/Footer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Rotas />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;