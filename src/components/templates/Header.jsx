import React from "react";
import "./Header.css";


function debbug(p){
    console.log(p)
}


const Header = (props) => {

    debbug(props)

    return (
        <header className="header d-none d-sm-flex flex-column">
            <h1 className="mt-3">
                <i className={`fa fa-${props.icone}`}></i> {props.titulo}
            </h1>
            <p className="lead text-muted">{props.subtitle}</p>
        </header>
    )
}



export default Header;