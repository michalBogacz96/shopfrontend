import React from "react";

const OrdersHistory = () => {

    function showOrdersHistoryPanel() {
        window.location.href = "/orders";
    }

    return (
        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                onClick={showOrdersHistoryPanel}
        >Historia zakupów
        </button>
    )
}
export default OrdersHistory