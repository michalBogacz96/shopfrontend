import React from "react";

const Categories = () => {

    function showCategoryPanel() {
        window.location.href = "/category";
    }

    return (
        <button id="categories" type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                onClick={showCategoryPanel}
        >Categories
        </button>
    )

}
export default Categories