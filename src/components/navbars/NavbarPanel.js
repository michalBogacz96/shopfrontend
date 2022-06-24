import React from "react";
import OrdersHistory from "./buttons/OrdersHistory";
import Products from "./buttons/Products";
import Categories from "./buttons/Categories";
import Basket from "./buttons/Basket";
import Logout from "./buttons/Logout";

const NavbarPanel = () => {


    return (
        <div className="col-15 text-right">
            <OrdersHistory/>
            <Products/>
            <Categories/>
            <Basket/>
            <Logout/>
        </div>


    )

}

export default NavbarPanel