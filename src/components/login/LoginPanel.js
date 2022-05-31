import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import NavbarInLoginPage from "../navbars/NavbarInLoginPage";
import './login.css'
import axios from "axios";
import queryString from 'query-string';
import {AppContext} from "../../appContext/AppContext";
import {config} from "../../config/config";


function showProductPanel() {
    window.location.href = "/product";
}

const LoginPanel = () => {

    const { setUserContext } = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const loginHandler = () => {
        console.log("1");

        try {
            console.log("2");
            console.log(token);
            axios.get(config.apiUrl + '/user/self', { headers: { 'Authorization': `Bearer ${token}`}}).then( res =>{
                console.log("3");
                const me = res.data;
                console.log(res.data);
                const user = {
                    firstName: me.firstName,
                    lastName: me.lastName,
                    email: me.email
                };
                setUserContext(`Bearer ${token}`, user, true);
                console.log("4");
                showProductPanel();
            });
        } catch (e) {
            alert('Wystapil problem');
            console.error(e);
        }
    };

    let history = useNavigate();

    useEffect(() => {
        setUserContext(null, null, false);
        const tryLogin = () => {
            if (history && history.location && history.location.search) {
                let params = queryString.parse(history.location.search);

                if (params.isLogin && params.token) {
                    loginHandler(params.token);
                }
            }
        };

        tryLogin();
    }, []);


    const loginSubmit = () => {
        console.log("jestem tu")
        console.log(token)
        axios.post(config.apiUrl +'/user/auth',
            { email, password }).then( res =>
            {
                setToken(res.data.token);
                setUserContext(null, null, true);
                loginHandler(token);
            }
        );
    };
    return (
            <div>
                <NavbarInLoginPage/>
                <div className="todo-list">
                    <div className="sign-in-form">
                        <h1 className="sign-in-text font-weight-bold">Sign in</h1>
                        <form className="form-text">
                            <div className="form-group paddingBottom">
                                <label className="black-text">Email</label>
                                <input placeholder="Email" type="text"
                                       className="form-control" required value={email}
                                       onChange={f => setEmail(f.target.value)}/>
                            </div>
                            <div className="form-group paddingBottom">
                                <label className="black-text">Password</label>
                                <input placeholder="Password" type="password"
                                       className="form-control"  required value={password}
                                       onChange={f => setPassword(f.target.value)}/>
                            </div>
                            <button type="button" className="btn btn-primary btn-block font-weight-bold"
                                    onClick={loginSubmit}
                            >Sign In
                            </button>
                            {/*<BackendResponse status={this.state.status} backendMessage={this.state.backendMessage}/>*/}
                        </form>
                        <p className="font-size">
                            <Link to="/registration" className="font-size margin">
                                Register New Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default LoginPanel