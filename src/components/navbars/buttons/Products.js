import React from "react";

const Products = () => {

    function showProductPanel() {
        window.location.href = "/product";
    }

    return (
        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                onClick={showProductPanel}
        >Produkty
        </button>
    )

}
export default Products