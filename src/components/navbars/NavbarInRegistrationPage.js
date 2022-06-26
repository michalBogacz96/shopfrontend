import React from 'react';
import '../login/login.css';

function SignIn() {
    window.location.href = "/";
}

const NavbarInRegistrationPage = () => {


    return (
        <nav className="navbar navbar-dark bg-secondary justify-content-end">
            <form className="form-inline">
                <button id="signInButton" className="btn btn-primary sign-in-button font-weight-bold" type="button"
                        onClick={SignIn}>Sign In
                </button>
            </form>
        </nav>
    );

}

export default NavbarInRegistrationPage;


