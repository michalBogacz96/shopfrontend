import React, {useContext} from "react";
import {sport, pilka} from "../../photo";
import {AppContext} from "../../appContext/AppContext";

const BasketItem = (props) => {

    const {removeProductFromBasket} = useContext(AppContext);

    let logo = null;
    if (props.photo === "sport.jpg") {
        logo = sport;
    }else if (props.photo === "pilka.jpg"){
        logo = pilka;
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
                        <li className="list-group-item">Product: {props.name}</li>
                        <li className="list-group-item">Category: {props.category}</li>
                        <li className="list-group-item">Price: {props.price}</li>
                        <li className="list-group-item">Description: {props.description}</li>

                    </ul>
                    <button type="submit" className="btn btn-primary btn-lg my-book-style font-weight-bold "
                            onClick={() => {
                                removeProductFromBasket(props.id)
                                window.location.reload();
                            }}
                    >Remove
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

export default BasketItem