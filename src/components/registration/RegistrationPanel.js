import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Register.css'
import NavbarInRegistrationPage from "../navbars/NavbarInRegistrationPage";
import axios from "axios";
import {config} from "../../config/config";
import BackendResponse from "../../config/BackendResponse";


const RegistrationPanel = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const registerUser = () => {
        let params = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        };


        try {
            axios.post(config.apiUrl + '/user/register', params).then(res => {

                console.log(res.data)
                setMessage(res.data.message)
                setStatus(res.data.status)

            });

        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div>
            <NavbarInRegistrationPage/>
            <div className="registration-page">
                <div className="sign-in-form">
                    <h1 id="createNewAccountText" className="sign-in-text font-weight-bold">Create a new account</h1>
                    <form>
                        <div className="form-group paddingBottom">
                            <label id="firstNameText" className="black-text">First Name</label>
                            <input placeholder="First Name" type="text"
                                   className="form-control" id="firstname" required value={firstname}
                                   onChange={f => setFirstname(f.target.value)}/>
                        </div>
                        <div className="form-group paddingBottom">
                            <label id="lastNameText" className="black-text">Last Name</label>
                            <input placeholder="Last Name" type="text"
                                   className="form-control" id="lastname" required value={lastname}
                                   onChange={f => setLastname(f.target.value)}/>
                        </div>
                        <div className="form-group paddingBottom">
                            <label id="emailText" className="black-text">Email Address</label>
                            <input placeholder="Email Address" type="email"
                                   className="form-control" id="email" required value={email}
                                   onChange={f => setEmail(f.target.value)}/>
                        </div>
                        <div className="form-group paddingBottom">
                            <label id="passwordText" className="black-text">Password</label>
                            <input placeholder="Password" type="password"
                                   className="form-control" id="password" required value={password}
                                   onChange={f => setPassword(f.target.value)}/>
                        </div>
                        <button id="registerNewAccountButton" type="button" className="btn btn-primary btn-block" onClick={registerUser}>
                            Register new account
                        </button>
                        <BackendResponse id="backendMessage" status={status} message={message}/>
                    </form>
                    <p id="signInButton" className="paddingTop">
                        <Link id="signInText" to="/">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default RegistrationPanel