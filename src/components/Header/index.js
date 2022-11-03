import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Nav from "../Nav";
import "./style.css";

function Header() {
    const [sections] = useState([
        {name: "About Me"},
        {name: "Portfolio"},
        {name: "Contact Me"},
        {name: "My Resume"}
      ])
    
      const [currentSection, setCurrentSection] = useState(sections[0])
    return (
        <header className="custom-header px-3">
            <div>
                <a>
                <img className="py-2" src={logo} alt="logo" height="100" />
                <h1 className="header">easy<span className="text-green">Coder</span></h1>
                </a>
            </div>
            <Nav sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection}/>
        </header>
    );
}

export default Header;