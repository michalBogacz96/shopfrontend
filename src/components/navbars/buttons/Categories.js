import React from "react";

const Categories = () => {

    function showCategoryPanel() {
        window.location.href = "/category";
    }

    return (
        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                onClick={showCategoryPanel}
        >Kategorie
        </button>
    )

}
export default Categories