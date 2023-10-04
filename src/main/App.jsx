import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Main from "../components/templates/Main";
import Footer from "../components/templates/Footer";

const App = (props) => {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main icone="home" titulo="Início" subtitulo="Projeto de CRUD com React"/>
            <Footer />
        </div>
    )
}

export default App;