import React, {useEffect, useState} from "react";
import './ProductPanel.css'
import axios from 'axios';
import ProductItem from "./ProductItem";
import {config} from "../../config/config";
import NavbarPanel from "../navbars/NavbarPanel";


const ProductsPanel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getData =  () => {
            try {
                axios.get(config.apiUrl + '/product').then(res => {
                    setProducts(res.data)
                })
            } catch (e) {
                console.info("JESTEM JUZ PO ODPOWIEDZI W PRODUKTACH");
                console.info(e);
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
                    <div className="col-12 text-right ">
                        <NavbarPanel/>
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