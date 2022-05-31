import React, {useContext, useEffect, useState} from "react";
import ProductItem from "../products/ProductItem";
import axios from "axios";
import {config} from "../../config/config";
import {AppContext} from "../../appContext/AppContext";
import {useParams} from "react-router-dom";


const SpecificProductPanel = () => {
    const [products, setProducts] = useState([]);
    const { setUserContext } = useContext(AppContext);
    const {categoryId} = useParams();


    useEffect( () => {


        console.log("1");
        console.log("categoryId");
        console.log(categoryId);
        const getData = () => {
            try {
                console.log("2");
                axios.get(config.apiUrl + '/product/category/' + categoryId).then(res => {
                    setProducts(res.data);
                });

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
                     category={productItem.categoryEntity.id}
        />)

    return (
        <div>
            <div className="container ">

                <div className="row justify-content-between">
                    <div className="col-9 text-right ">

                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold"
                        >Historia zakupów
                        </button>
                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold" onClick={() => {
                            window.location.href = "/product";
                        }}
                        >Produkty
                        </button>
                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold" onClick={() => {
                            window.location.href = "/category";
                        }}
                        >Categories
                        </button>
                        <button type="button" className="btn btn-primary my-navbar-style font-weight-bold" onClick={() => {
                            window.location.href = "/basket";
                        }}
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
                <div >
                    {prod}
                </div>
            </div>
        </div>


    )
}

export default SpecificProductPanel