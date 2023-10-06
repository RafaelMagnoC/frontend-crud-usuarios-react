import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home"
import UsuarioCrud from "../components/usuario/Usuario";

const Rotas = (props) => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/usuarios" element={<UsuarioCrud />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
};

export default Rotas;