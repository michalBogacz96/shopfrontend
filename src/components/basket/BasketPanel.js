import React, {useContext, useEffect, useState} from "react";
import './BasketPanel.css'
import {AppContext} from "../../appContext/AppContext";
import axios from "axios";
import {config} from "../../config/config";
import BasketItem from "./BasketItem";


function showProductPanel() {
    window.location.href = "/product";
}

function showCategoryPanel() {
    window.location.href = "/category";
}




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
    // let total = tabOfNumbers.reduce((a, b) => a + b, 0)

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
        const pars = {
            items: getBasketItems,
            price: price
        }

        axios.post(config.apiUrl + '/orderItem', pars)
    }

    return (

        <div>
            <div className="container ">

                <div className="row justify-content-between">
                    <div className="col-9 text-right ">
                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                        >Historia zakupów
                        </button>
                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                                onClick={showCategoryPanel}
                        >Categories
                        </button>
                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                                onClick={showProductPanel}
                        >Produkty
                        </button>
                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                        >Wyloguj
                        </button>
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
                            className="btn btn-primary btn-lg my-button-style font-weight-bold" onClick={() => sendOrder()}>Zamow
                    </button>
                    {/*<button type="button"*/}
                    {/*        className="btn btn-primary  my-button-style font-weight-bold">Sort by price desc*/}
                    {/*</button>*/}
                    {/*<button type="button"*/}
                    {/*        className="btn btn-primary  my-button-style font-weight-bold">Sort by price asc*/}
                    {/*</button>*/}

                </div>
                <div className="col-md-12 text-center btn-group">
                    <h2>Do zaplaty:  </h2>
                    <h2>{tabOfNumbers.reduce((a, b) => a + b, 0) } PLN</h2>
                </div>
                <div >
                    {prod}
                </div>
            </div>
        </div>
    )
}