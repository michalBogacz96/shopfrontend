import React from 'react';
import '../login/login.css';

function SignIn() {
    window.location.href = "/login";
}

const NavbarInRegistrationPage = () => {


    return (
        <nav className="navbar navbar-dark bg-secondary justify-content-end">
            <form className="form-inline">
                <button className="btn btn-primary sign-in-button font-weight-bold" type="button"
                        onClick={SignIn}>Sign in
                </button>
            </form>
        </nav>
    );

}

export default NavbarInRegistrationPage;


