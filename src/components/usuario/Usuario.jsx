import React, { Component } from "react";

import Main from "../templates/Main";


const cabecalhoProps = {
    icone: "users",
    titulo: "Usuários",
    subtitulo: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
};


class UsuarioCrud extends Component {
    render(){
        return(
            <Main {...cabecalhoProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}

