import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

import Nav from "../Nav";
import About from "../About";
import Portfolio from "../Portofolio";
import Contact from "../Contact";
import Resume from "../Resume";

import "./style.css";

function Header() {
    const [sections] = useState([
        { name: "About Me" },
        { name: "Portfolio" },
        { name: "Contact Me" },
        { name: "My Resume" }
    ])

    const [currentSection, setCurrentSection] = useState(sections[0])

    const renderPage = () => {
        if (currentSection.name === "About Me") {
            return <About />
        } else if (currentSection.name === "Portfolio") {
            return <Portfolio />
        } else if (currentSection.name === "Contact Me") {
            return <Contact />
        } else if (currentSection.name === "My Resume") {
            return <Resume />
        } else {
            return <About />
        }
    }
    return (
        <div>
            <header className="custom-header px-3">
                <div>
                    <a>
                        <img className="py-2" src={logo} alt="logo" height="100" />
                        <h1 className="header">easy<span className="text-green">Coder</span></h1>
                    </a>
                </div>
                <Nav sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
            </header>
            <main>
                <div className="jumbotron custom-page p-4 m-4">
                    {renderPage()}
                </div>
            </main>
        </div>
    );
}

export default Header;