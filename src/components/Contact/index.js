import React, {useState} from "react";

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
            <form id="content-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name}onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email address: </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">Message </label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {displayMessage && (
                    <div>
                        <p>{displayMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact