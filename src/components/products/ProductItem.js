import React, {useContext, useState} from "react";
import {sport, pilka, rower} from "../../photo";
import {AppContext} from "../../appContext/AppContext";

const ProductItem = (props) => {

    const {addProductToBasket, getBasketItems} = useContext(AppContext);

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
                        <li className="list-group-item">Produkt: {props.name}</li>
                        <li className="list-group-item">Kategoria: {props.category}</li>
                        <li className="list-group-item">Cena: {props.price}</li>
                        <li className="list-group-item">Opis: {props.description}</li>

                    </ul>
                    <button type="submit" className="btn btn-primary btn-lg my-book-style font-weight-bold "
                            onClick={() => {
                                addProductToBasket(props.id)
                            }}
                    >Dodaj do koszyka
                    </button>
                </div>

                <div className="col-6">

                    <div className="row">
                        {/*<button type="button" className="btn btn-primary my-book-style font-weight-bold "*/}
                        {/*        >Book car*/}
                        {/*</button>*/}
                    </div>
                    {/*<BackendResponse status={this.state.status} backendMessage={this.state.backendMessage}/>*/}

                </div>

            </div>
        </div>
    )
}

export default ProductItem