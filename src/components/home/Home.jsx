import React from "react";
import Main from "../templates/Main"

const Home = (props) => {
    return (
        <Main icone="home" titulo="Início" subtitulo="Projeto de CRUD com React">
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar a construção de um dashboard em SPC com React</p>
        </Main>
    )
}

export default Home;
