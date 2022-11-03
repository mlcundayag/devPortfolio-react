import React from "react";

import "./style.css"

function Footer(){
    const icons = [
        {
            name: "fa-brands fa-github",
            links: "https://github.com/mlcundayag"
        },
        {
            name: "fa-brands fa-linkedin-in",
            links: "https://www.linkedin.com/in/miguel-undayag/"
        },
        {
            name: "fa-brands fa-facebook-f",
            links: "https://www.facebook.com/miguelmj09"
        },
        {
            name: "fa-brands fa-instagram",
            links: "https://www.instagram.com/lavie_en_gris/"
        },
        {
            name: "fa-brands fa-twitter",
            links: "https://twitter.com/Miguelmj09"
        },
        {
            name: "fa-brands fa-stack-overflow",
            links: "https://stackoverflow.com/users/19638088/miguel-undayag"
        }
    ]

    return (
        <div className="custom-footer pt-4">
            <div>
            <span className="px-2">©easyCoder{new Date().getFullYear()}</span>
            {icons.map(icon => {
                return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            })}
            </div>
        </div>
    )
}

export default Footer