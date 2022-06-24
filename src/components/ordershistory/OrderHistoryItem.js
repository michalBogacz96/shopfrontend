import React from "react";

const OrderHistoryItem = (order) => {



    return (
        <tbody id="orderTable">
        <tr>
            <td>{order.orderNumber}</td>
            <td>{order.productName}</td>
            <td>{order.productPrice}</td>
            <td>{order.categoryName}</td>
            <td>{order.orderDate}</td>
            <td>{order.orderPrice}</td>
        </tr>
        </tbody>

    )
}

export default OrderHistoryItem