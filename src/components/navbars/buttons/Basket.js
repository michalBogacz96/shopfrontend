import React from "react";

const Basket = () => {

    function showBasketPanel() {
        window.location.href = "/basket";
    }

    return (
        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                onClick={showBasketPanel}
        >Koszyk
        </button>
    )

}

export default Basket