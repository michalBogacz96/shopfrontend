import React, {useEffect, useState} from "react";
import axios from "axios";
import {config} from "../../config/config";
import CategoryItem from "./CategoryItem";
import './CategoryPanel.css'
import NavbarPanel from "../navbars/NavbarPanel";


const CategoryPanel = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
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
                    <NavbarPanel/>
                </div>
            </div>
            <div className=" container-fluid todo-list">
                <h1 className="sign-in-text font-weight-bold">Kategorie</h1>
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