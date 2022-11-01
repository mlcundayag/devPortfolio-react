import React, { useState} from "react";
import logo from "../../assets/images/logo.png"
import "./style.css";

const data = {

}

function Header() {
    return (
    <header className="custom-header">
        <a>
            <img src={logo} alt="logo" height="100"/>
        <h1 className="header">easy<span className="text-green">Coder</span></h1></a>
    </header>
    );
}

export default Header;