import React from "react";
import "./style.css"

import resume from "../../assets/files/resume-undayag.pdf";
import resumeScreenshot1 from "../../assets/images/resume-p1.png"
import resumeScreenshot2 from "../../assets/images/resume-p2.png"

function Resume() {
    const iconDownload = "fa-solid fa-download fa-2xl ";
    return (
        <div className="container">
            <h1 className="pb-3">My Resume</h1>
            <p> Download resume <a href={resume} download><i className={iconDownload}></i></a></p>
            <div className="py-2 d-flex">
                <img src={resumeScreenshot1} width="50%"/>
                <img src={resumeScreenshot2} width="50%"/>
            </div>
        </div>
    )
}

export default Resume