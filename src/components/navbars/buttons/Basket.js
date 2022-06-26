import React from "react";

const Basket = () => {

    function showBasketPanel() {
        window.location.href = "/basket";
    }

    return (
        <button id="basket" type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                onClick={showBasketPanel}
        >Basket
        </button>
    )

}

export default Basket