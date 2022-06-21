import React, {useContext, useEffect, useState} from "react";
import './ProductPanel.css'
import axios from 'axios';
import ProductItem from "./ProductItem";
import {config} from "../../config/config";
import {AppContext} from "../../appContext/AppContext";

function showBasketPanel() {
    window.location.href = "/basket";
}

function showCategoryPanel() {
    window.location.href = "/category";
}

const ProductsPanel = () => {
    const [products, setProducts] = useState([]);
    const { setUserContext } = useContext(AppContext);

    useEffect(() => {

        const getData =  () => {
            try {
                console.log("JESTEM W PRODUKTACH")
                axios.get(config.apiUrl + '/product').then(res => {
                    setProducts(res.data)
                })
            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, [])

    const prod = products.map(productItem =>
        <ProductItem key={productItem.id}
                     id={productItem.id}
                     name={productItem.name}
                     description={productItem.description}
                     price={productItem.price}
                     photo={productItem.photo}
                     category={productItem.categoryEntity.name}
        />)


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
                                onClick={showBasketPanel}
                        >Koszyk
                        </button>
                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                                onClick={() => {
                                    setUserContext(null, null, false);
                                    window.location.href = "/";
                                }
                                }
                        >Wyloguj
                        </button>
                    </div>
                </div>
            </div>
            <div className="todo-list">
                <div className="col-md-12 text-center btn-group">
                </div>
                <div>
                    {prod}
                </div>
            </div>
        </div>
    )
}

export default ProductsPanel