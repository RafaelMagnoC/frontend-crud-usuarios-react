import React from "react";
import "./Header.css";

const Header = ({icone, titulo, subtitulo}) => {

    return (
        <header className="header d-none d-sm-flex flex-column">
            <h1 className="mt-3">
                <i className={`fa fa-${icone}`}></i> {titulo}
            </h1>
            <p className="lead text-muted">{subtitulo}</p>
        </header>
    )
}

export default Header;