import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import NavbarInLoginPage from "../navbars/NavbarInLoginPage";
import './login.css'
import axios from "axios";
import queryString from 'query-string';
import {AppContext} from "../../appContext/AppContext";
import {config} from "../../config/config";
import {GOOGLE_AUTH_URL, GITHUB_AUTH_URL} from "../../config/config";
import googleLogo from '../../img/google-logo.png'
import githubLogo from '../../img/github-logo.png'


function showProductPanel() {
    window.location.href = "/product";
}

const LoginPanel = () => {

    const { setUserContext } = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {

        try {
            let localstorageToken = localStorage.getItem('token');
            axios.get(config.apiUrl + '/user/self', { headers: { 'Authorization': localstorageToken}}).then( res =>{
                const me = res.data;
                const user = {
                    firstName: me.firstName,
                    lastName: me.lastName,
                    email: me.email
                };
                setUserContext(localstorageToken, user, true);
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
        axios.post(config.apiUrl +'/user/auth',
            { email, password }).then( res =>
            {
                let myToken = ['Bearer', ' ', res.data.accessToken].join('')
                localStorage.setItem('token', myToken);
                setUserContext(null, null, true);
                loginHandler(myToken);
            }
        );
    };
    return (
            <div>
                <NavbarInLoginPage/>
                <div className="todo-list">
                    <div className="sign-in-form">
                        <h1 className="sign-in-text font-weight-bold">Sign in</h1>

                        <div>
                            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                                <img src={googleLogo} alt="Google" /> Log in with Google</a>
                            <a className="btn btn-block social-btn google" href={GITHUB_AUTH_URL}>
                                <img src={githubLogo} alt="Github" /> Log in with Github</a>
                        </div>
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