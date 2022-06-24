import React, {useEffect, useState} from "react";
import axios from "axios";
import {config} from "../../config/config";
import NavbarPanel from "../navbars/NavbarPanel";
import OrderHistoryItem from "./OrderHistoryItem";

const OrdersHistoryPanel = () => {

    const [orders, setOrders] = useState([]);

    useEffect( () => {

        const getData = () => {
            try {
                axios.get(config.apiUrl + '/order').then(res => {
                    let ordersResponse = res.data;
                    setOrders(ordersResponse)
                })
            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, [])

    const allOrders = orders.map(orderItem =>

        <OrderHistoryItem key={orderItem.orderNumber}
                      productName={orderItem.productName}
                      categoryName={orderItem.categoryName}
                      productPrice={orderItem.productPrice}
                      orderPrice={orderItem.orderPrice}
                      orderNumber={orderItem.orderNumber}
                      orderDate={orderItem.orderDate}
        />)

    return (
        <div>
            <div className="container ">

                <div className="row justify-content-between">
                    <NavbarPanel/>
                </div>
            </div>
            <div className=" container-fluid todo-list">
                <h1 className="sign-in-text font-weight-bold">Zamowienia</h1>
                <table className="table table-striped text-center">
                    <thead>
                    <tr>
                        <th scope="col">Numer Zamowienia</th>
                        <th scope="col">Nazwa Produktu</th>
                        <th scope="col">Cena Produktu</th>
                        <th scope="col">Kategoria</th>
                        <th scope="col">Data Zamowienia</th>
                        <th scope="col">Cena Zamowienia</th>
                    </tr>
                    </thead>
                    {allOrders}
                </table>
            </div>
        </div>
    )
}

export default OrdersHistoryPanel