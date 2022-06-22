import React, {useContext, useEffect, useState} from "react";
import './BasketPanel.css'
import {AppContext} from "../../appContext/AppContext";
import axios from "axios";
import {config} from "../../config/config";
import BasketItem from "./BasketItem";
import OrdersHistory from "../navbars/buttons/OrdersHistory";
import Categories from "../navbars/buttons/Categories";
import Products from "../navbars/buttons/Products";
import Logout from "../navbars/buttons/Logout";



export default function () {
    const {getBasketItems, removeAllProductsFromBasket} = useContext(AppContext);
    const [product, setProducts] = useState([])
    const [price, setPrice] = useState(0)

    const JsonContext = ({value}) => (<pre>{JSON.stringify(value)}</pre>);


    useEffect(
        () => {
            const resData = []
            const sendIds = async () => {
                try {
                    let params = getBasketItems


                    for (let i = 0; i < params.length; i++) {
                        const res = await axios.get(config.apiUrl + `/product/${params[i]}`)
                        resData.push(res.data)
                    }
                    setProducts(resData)
                    let tabOfNumbers = product.map(p => p.price)
                    setPrice(tabOfNumbers)
                    console.log(product)
                } catch (e) {
                    console.log(e)
                }
            }
            sendIds()
        }, [])

    let tabOfNumbers = product.map(p => p.price)

    const prod = product.map(productItem =>
        <BasketItem key={productItem.id}
                    id={productItem.id}
                    name={productItem.name}
                    description={productItem.description}
                    price={productItem.price}
                    photo={productItem.photo}
                    category={productItem.categoryEntity.name}
        />)

    const sendOrder = async () => {


        let params = getBasketItems;
        let products = [params.length];
        for (let i = 0; i < params.length; i++) {
            products[i] = params[i];
        }

        console.log("params")
        console.log(products)
        console.log(typeof products)
        console.log("jeden params")
        console.log(products[0])
        console.log(typeof products[0])


        const data = "MOJ STRING"


        const pars = {
            products: getBasketItems
        }
        console.log("MOJE DANE DO WYSYLKI");
        console.log(pars);

        try {
            const res = await axios.post(config.apiUrl + '/order', products)
                console.log("PO ODPOWIEDZI")
                console.log(res.data);
                removeAllProductsFromBasket();
                // window.location.reload();

        } catch (e) {
            console.log(e);
        }
    }

    return (

        <div>
            <div className="container ">

                <div className="row justify-content-between">
                    <div className="col-9 text-right ">
                        <OrdersHistory/>
                        <Categories/>
                        <Products/>
                        <Logout/>
                    </div>
                </div>
            </div>
            <div className="todo-list">
                <div className="col-md-12 text-center btn-group">

                    <button type="button"
                            className="btn btn-primary btn-lg  my-button-style font-weight-bold"
                            onClick={() => {
                                removeAllProductsFromBasket()
                                window.location.reload();
                            }}>Usun wszystko z koszyka
                    </button>
                    <button type="button"
                            className="btn btn-primary btn-lg my-button-style font-weight-bold"
                            onClick={() => sendOrder()}>Zamow
                    </button>
                </div>
                <div className="col-md-12 text-center btn-group">
                    <h2>Do zaplaty: </h2>
                    <h2>{tabOfNumbers.reduce((a, b) => a + b, 0)} PLN</h2>
                </div>
                <div>
                    {prod}
                </div>
            </div>
        </div>
    )
}