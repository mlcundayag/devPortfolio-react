import React, { useEffect } from "react";
import "./style.css";


function Nav(props) {
    const {
        sections = [], currentSection, setCurrentSection
    } = props

    useEffect(() => {
        document.title = currentSection.name
    }, [currentSection])
    
    return (
        <nav className="navbar-nav p-4">
            <ul className="custom-navlinks">
                {sections.map((section) => {
                    return <li className={currentSection.name === section.name && "active"} key={section.name}><span onClick={() => setCurrentSection(section) }>{section.name}</span></li>
                })}
            </ul>
        </nav>
    )
}

export default Nav;