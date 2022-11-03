import React from "react";
import "./style.css"

import btat from "../../assets/images/btat.png";
import recipeFinder from "../../assets/images/recipefinder.png";
import easyBlog from "../../assets/images/easyblog.png";
import weatherTracker from "../../assets/images/weathertracker.png";
import passwordGenerator from "../../assets/images/password-generator.png";
import quiz from "../../assets/images/quiz-for-dummies.png";

function Portfolio() {
    const iconGithub = "fa-brands fa-github fa-2xl ";
    const iconLink = "fa-solid fa-paper-plane fa-lg";
    return (
        <div className="container">
            <h1 className="pb-3">My Portfolio</h1>
            <div class="card-group my-3">
                <div class="card bg-transparent border mx-2">
                    <img class="card-img-top" src={btat} alt="been there ate that" />
                    <div class="card-body">
                        <h2 class="card-title">BeenThere AteThat</h2>
                        <p class="card-text">JS, CSS, Express, mySQL, HandleBars</p>
                        <div className="text-center">
                            <a className="mx-2" href="https://github.com/ddangeles/BeenThere-AteThat" target="_blank" rel="noopener noreferrer"><i className={iconGithub}></i></a>
                            <a className="mx-2" href="https://beenthereatethat.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className={iconLink}></i></a>
                        </div>
                    </div>
                </div>
                <div class="card bg-transparent border mx-2">
                    <img class="card-img-top" src={recipeFinder} alt="reciper finder" />
                    <div class="card-body">
                        <h2 class="card-title">Recipe Finder</h2>
                        <p class="card-text">JS, CSS, Materialize, web APIs</p>
                        <div className="text-center">
                            <a className="mx-2" href="https://github.com/courtneycaputo/recipe-finder" target="_blank" rel="noopener noreferrer"><i className={iconGithub}></i></a>
                            <a className="mx-2" href="https://courtneycaputo.github.io/recipe-finder/" target="_blank" rel="noopener noreferrer"><i className={iconLink}></i></a>
                        </div>
                    </div>
                </div>
                <div class="card bg-transparent border mx-2">
                    <img class="card-img-top" src={easyBlog} alt="Easy Blog MVC" />
                    <div class="card-body">
                        <h5 class="card-title">Easy Blog: Tech Blog MVC</h5>
                        <p class="card-text">JS, CSS, Node, mySQL, Express, HandleBars, bootstrap</p>
                        <div className="text-center">
                            <a className="mx-2" href="https://github.com/mlcundayag/easyBlogMVC" target="_blank" rel="noopener noreferrer"><i className={iconGithub}></i></a>
                            <a className="mx-2" href="https://easyblogmvc.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className={iconLink}></i></a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="card-group my-3">
                <div class="card bg-transparent border mx-2">
                    <img class="card-img-top" src={weatherTracker} alt="the weather tracker" />
                    <div class="card-body">
                        <h5 class="card-title">5-day Weather Tracker</h5>
                        <p class="card-text">JS, CSS, web APIs</p>
                        <div className="text-center">
                            <a className="mx-2" href="https://github.com/mlcundayag/weather-tracker" target="_blank" rel="noopener noreferrer"><i className={iconGithub}></i></a>
                            <a className="mx-2" href="https://mlcundayag.github.io/weather-tracker/" target="_blank" rel="noopener noreferrer"><i className={iconLink}></i></a>
                        </div>
                    </div>
                </div>
                <div class="card bg-transparent border mx-2">
                    <img class="card-img-top" src={passwordGenerator} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Random Password generator</h5>
                        <p class="card-text">JS, CSS</p>
                        <div className="text-center">
                            <a className="mx-2" href="https://github.com/mlcundayag/password-generator" target="_blank" rel="noopener noreferrer"><i className={iconGithub}></i></a>
                            <a className="mx-2" href="https://mlcundayag.github.io/password-generator/" target="_blank" rel="noopener noreferrer"><i className={iconLink}></i></a>
                        </div>
                    </div>
                </div>
                <div class="card bg-transparent border mx-2">
                    <img class="card-img-top" src={quiz} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Quiz for Dummies</h5>
                        <p class="card-text">JS, CSS</p>
                        <div className="text-center">
                            <a className="mx-2" href="https://github.com/mlcundayag/quiz-for-dummies" target="_blank" rel="noopener noreferrer"><i className={iconGithub}></i></a>
                            <a className="mx-2" href="https://mlcundayag.github.io/quiz-for-dummies/" target="_blank" rel="noopener noreferrer"><i className={iconLink}></i></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portfolio