import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {config} from "../../config/config";
import CategoryItem from "./CategoryItem";
import './CategoryPanel.css'
import {AppContext} from "../../appContext/AppContext";
import OrdersHistory from "../navbars/buttons/OrdersHistory";
import Products from "../navbars/buttons/Products";
import Basket from "../navbars/buttons/Basket";
import Logout from "../navbars/buttons/Logout";

function showBasketPanel() {
    window.location.href = "/basket";
}

const CategoryPanel = () => {

    const [categories, setCategories] = useState([]);
    const { setUserContext } = useContext(AppContext);

    useEffect( () => {
        const getData = async () => {
            try {
                let res = await axios.get(config.apiUrl + '/category')
                let categories = res.data;
                setCategories(categories)
                console.log(categories)

            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, [])


    const allCategories = categories.map(categoryItem =>

        <CategoryItem key={categoryItem.id}
                          id={categoryItem.id}
                          name={categoryItem.name}
        />)

    return (
        <div>
            <div className="container ">

                <div className="row justify-content-between">
                    <div className="col-9 text-right ">
                        <OrdersHistory/>
                        <Products/>
                        <Basket/>
                        <Logout/>
                    </div>
                </div>
            </div>
            <div className=" container-fluid todo-list">
                <h1 className="sign-in-text font-weight-bold">Categories</h1>
                    <table className="table table-striped text-center">
                        <thead>
                        <tr>
                            <th scope="col">Numer</th>
                            <th scope="col">Nazwa Kateorii</th>
                            <th scope="col">Szukaj Produktów</th>
                        </tr>
                        </thead>
                        {allCategories}
                    </table>
            </div>
        </div>
    )
}
export default CategoryPanel