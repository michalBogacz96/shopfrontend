import React from "react";

const OrdersHistory = () => {

    function showOrdersHistoryPanel() {
        window.location.href = "/orders";
    }

    return (
        <button id="orders" type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                onClick={showOrdersHistoryPanel}
        >My orders
        </button>
    )
}
export default OrdersHistory