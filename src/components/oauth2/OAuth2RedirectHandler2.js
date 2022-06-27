import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../appContext/AppContext";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import {config} from "../../config/config";



function showProductPanel() {
    window.location.href = "/product";
}

function redirectToLoginPage() {
    window.location.href = "/";
}

const OAuth2RedirectHandler2 = () => {

    const {setUserContext} = useContext(AppContext);
    const [setToken] = useState('');
    const [searchParams] = useSearchParams();
    const queryToken = searchParams.get("token");



    const loginHandler = () => {


        try {
            let localstorageToken = localStorage.getItem('token');

            axios.get(config.apiUrl + '/user/self', {headers: {'Authorization': localstorageToken}}).then(res => {
                console.log("3");
                const me = res.data;
                console.log(res.data);
                const user = {
                    firstName: me.firstName,
                    lastName: me.lastName,
                    email: me.email
                };
                setUserContext(null, user, true);

                showProductPanel();
            });
        } catch (e) {
            alert('Wystapil problem');
            console.error(e);
        }
    };



    useEffect(() => {

        setUserContext(null, null, false);
        const tryLogin = () => {
            if (queryToken) {
                setToken(queryToken);
                let myToken = ['Bearer', ' ', queryToken].join('')
                localStorage.setItem('token', myToken);
                setUserContext(null, null, true)
                loginHandler();
            }
        }
        tryLogin();

    }, []);

    return (

        <div>

        </div>
    )
}

export default OAuth2RedirectHandler2