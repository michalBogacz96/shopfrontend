import React from 'react';
import '../login/login.css'



function RegisterNewAccount() {
    window.location.href = "/registration";
}

const NavbarInLoginPage = () => {

    return (
        <nav className="navbar navbar-dark bg-secondary justify-content-end">
            <form className="form-inline">
                <button className="btn btn-primary sign-in-button font-weight-bold" type="button"
                        onClick={RegisterNewAccount}>Register New Account
                </button>
            </form>
        </nav>
    );

}

export default NavbarInLoginPage;


