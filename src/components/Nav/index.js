import React, { useEffect } from "react";


function Nav(props) {
    const {
        sections = [], currentSection, setCurrentSection
    } = props

    useEffect(() => {
        document.title = currentSection.name
    }, [currentSection])
    
    return (
        <nav>
            <ul>
                {sections.map((section) => {
                    return <li className={currentSection.name === section.name && "active"} key={section.name}><span onClick={() => setCurrentSection(section) }>{section.name}</span></li>
                })}
            </ul>
        </nav>
    )
}

export default Nav;