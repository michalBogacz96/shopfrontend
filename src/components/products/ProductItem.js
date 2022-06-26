import React, {useContext, useState} from "react";
import {sport, pilka, rower} from "../../photo";
import {AppContext} from "../../appContext/AppContext";
import BackendResponse from "../../config/BackendResponse";

const ProductItem = (props) => {

    const {addProductToBasket, getBasketItems} = useContext(AppContext);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    let logo = null;
    if (props.photo === "sport.jpg") {
        logo = sport;
    }else if (props.photo === "pilka.jpg"){
        logo = pilka;
    }else if (props.photo === "rower.jpg"){
        logo = rower;
    }

    return (

        <div className="container todo-item">
            <div className="row">
                <div className="col-4 ">
                    <img src={logo} className="mr-3" alt="Generic placeholder image" width="300"
                         height="250"/>
                </div>
                <div className="col-4">
                    <ul className="list-group-flush">
                        <li id="productText" className="list-group-item">Product: {props.name}</li>
                        <li id="categoryText" className="list-group-item">Category: {props.category}</li>
                        <li id="priceText" className="list-group-item">Price: {props.price}</li>
                        <li id="descriptionText" className="list-group-item">Description: {props.description}</li>

                    </ul>
                    <button id="addToBasketButton" type="submit" className="btn btn-primary btn-lg my-book-style font-weight-bold "
                            onClick={() => {
                                addProductToBasket(props.id);
                                setMessage("Product added to basket");
                                setStatus(true);
                            }}
                    >Add to Basket
                    </button>
                    <BackendResponse id="backendMessage" status={status} message={message}/>
                </div>
                <div className="col-6">
                    <div className="row">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem