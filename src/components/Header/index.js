import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Nav from "../Nav";
import "./style.css";

const data = {

}

function Header() {
    return (
        <header className="custom-header">
            <div>
                <a>
                <img src={logo} alt="logo" height="100" />
                <h1 className="header">easy<span className="text-green">Coder</span></h1>
                </a>
            </div>
            <Nav />
        </header>
    );
}

export default Header;