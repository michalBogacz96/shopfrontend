import React, {useState} from "react";
import {Link} from "react-router-dom";
import './Register.css'
import NavbarInRegistrationPage from "../navbars/NavbarInRegistrationPage";
import axios from "axios";
import {config} from "../../config/config";


const RegistrationPanel = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const registerUser = async () => {
        let params = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        };

        console.log(firstname);
        console.log(lastname);
        console.log(email);
        try {
            let res = await axios.post(config.apiUrl + '/user/register', params);
            let message = res.data;
            console.log(message);
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <div>
            <NavbarInRegistrationPage/>
            <div className="registration-page">
                <div className="sign-in-form">
                    <h1 className="sign-in-text font-weight-bold">Create a new account</h1>
                    <form>
                        <div className="form-group paddingBottom">
                            <label className="black-text">First Name</label>
                            <input placeholder="First Name" type="text"
                                   className="form-control" id="firstname" required value={firstname}
                                   onChange={f => setFirstname(f.target.value)}/>
                        </div>
                        <div className="form-group paddingBottom">
                            <label className="black-text">Last Name</label>
                            <input placeholder="Last Name" type="text"
                                   className="form-control" id="lastname" required value={lastname}
                                   onChange={f => setLastname(f.target.value)}/>
                        </div>
                        <div className="form-group paddingBottom">
                            <label className="black-text">Email Address</label>
                            <input placeholder="Email Address" type="email"
                                   className="form-control" id="email" required value={email}
                                   onChange={f => setEmail(f.target.value)}/>
                        </div>
                        <div className="form-group paddingBottom">
                            <label className="black-text">Password</label>
                            <input placeholder="Password" type="password"
                                   className="form-control" id="password" required value={password}
                                   onChange={f => setPassword(f.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={registerUser}>Register New
                            Account
                        </button>
                        {/*<BackendResponse status={this.state.status} backendMessage={this.state.backendMessage}/>*/}
                    </form>
                    <p className="paddingTop">
                        <Link to="/">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default RegistrationPanel