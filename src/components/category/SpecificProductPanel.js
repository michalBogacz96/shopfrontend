import React, {useEffect, useState} from "react";
import ProductItem from "../products/ProductItem";
import axios from "axios";
import {config} from "../../config/config";
import {useParams} from "react-router-dom";
import NavbarPanel from "../navbars/NavbarPanel";


const SpecificProductPanel = () => {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();


    useEffect( () => {
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
                    <div className="col-12 text-right ">
                        <NavbarPanel/>
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