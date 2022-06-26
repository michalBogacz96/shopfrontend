import React from "react";

const Products = () => {

    function showProductPanel() {
        window.location.href = "/product";
    }

    return (
        <button id="products" type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                onClick={showProductPanel}
        >Products
        </button>
    )

}
export default Products