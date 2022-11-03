import React from "react";
import avatar from "../../assets/images/avatar.jpg"

function About() {
    return (
        <div className="container">
            <h1 className="pb-5">Miguel Undayag</h1>
            <div className="row">
                <div className="col-md-4">
                    <h2 className="text-center">Transforming Web Spaces</h2>
                    <p className="bg-secondary p-2 img-thumbnail">Just living my best life in the little town of Waikiki, in the great state of Aloha. Three years experience in e-commerce with a background in law. I'm a military veteran, now living the dream doing what I love. It's been a pleasure collaborating within the local community but now ready to expand worldwide and beyond.</p>
                </div>
                <img className="col-md-3 rounded-circle img-thumbnail img-fluid mx-4" src={avatar} width="25%" alt="avatar"/>
                <div className="col-md-4">
                    <h2 className="text-center">Fullstack developer</h2>
                    <p className="bg-secondary p-2 img-thumbnail">Frontend developer who writes clean and efficient code. Backend developer with imaginatve mind using cutting edge technology and innovative techniques.</p>
                </div>
            </div>
        </div>
    )
}

export default About