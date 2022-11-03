import React, {useState} from "react";
import "./style.css";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [displayMessage, setMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!displayMessage) {
            setMessage("Success! Form Submitted")
            console.log("Submit Form", formState)
        }
    }
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return regex.test(String(email).toLowerCase());
    };

    const handleChange = (event) => {
        if(event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            if(!isValid) {
                setMessage("Please enter a valid email!")
            } else {
                setMessage("");
            }
        } else {
            if(!event.target.value.length) {
                setMessage(`${event.target.name} is required`);
            } else {
                setMessage("")
            }
        }
        if(!displayMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value});
            console.log("Handle Form", formState)
        }
    }

    return (
        <div className="container">
            <h1 className="pb-5">Contact Me</h1>
            <form className="form-group row" id="content-form" onSubmit={handleSubmit}>
                <div>
                    <label className="custom-label col-sm-2 col-form-label" htmlFor="name">Name: </label>
                    <input className="col-sm-4" placeholder="John Doe" type="text" name="Name" defaultValue={name}onBlur={handleChange}></input>
                </div>
                <div>
                    <label className="custom-label col-sm-2 col-form-label" htmlFor="email">Email address: </label>
                    <input className="col-sm-4" placeholder="name@email.com" type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label className="custom-label col-sm-2 col-form-label" htmlFor="message">Message </label>
                    <textarea className="col-sm-4" placeholder="Your message here" name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {displayMessage && (
                    <div>
                        <p className="mt-3 display-message">{displayMessage}</p>
                    </div>
                )}
                <button className="col-sm-3 btn custom-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact