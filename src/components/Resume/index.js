import React from "react";
import "./style.css"

import resume from "../../assets/files/resume-undayag.pdf";

function Resume() {
    const iconDownload = "fa-solid fa-download fa-2xl ";
    return (
        <div className="container">
            <h1 className="pb-3">My Resume</h1>
            <p> Download resume <a href={resume} download><i className={iconDownload}></i></a></p>
            <div className="row">
                <h2>Developer Skills</h2>
                <ul className="skill-list col-md-4 list-group p-1 img-thumbnail">
                    <li class="list-group-item bg-secondary">HTML, CSS, Javascript</li>
                    <li class="list-group-item bg-secondary">JQuery, Bootstrap, Materialize</li>
                    <li class="list-group-item bg-secondary">API, JSON</li>
                    <li class="list-group-item bg-secondary">Node, NPM, Express.js</li>
                    <li class="list-group-item bg-secondary">OOP, ORM, MVC</li>
                    <li class="list-group-item bg-secondary">mySQL, noSQL, graphQL </li>
                    <li class="list-group-item bg-secondary">PWA</li>
                    <li class="list-group-item bg-secondary">React</li>
                    <li class="list-group-item bg-secondary">Mern</li>
                    <li class="list-group-item bg-secondary">Markdown</li>
                    <li class="list-group-item bg-secondary">Git</li>
                    <li class="list-group-item bg-secondary">Github Repo Management</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume