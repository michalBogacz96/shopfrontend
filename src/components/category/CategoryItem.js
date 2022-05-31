import React from "react";



const CategoryItem = (category) => {



    return (
        <tbody id="myTable">
        <tr>
            <td>{category.id}</td>
            <td>{category.name}</td>
            <td>
                <button className="btn btn-primary change-role-button font-weight-bold " onClick={() => {
                    window.location.href = `/product/category/` +category.id;
                }}
                >Szukaj Produktu</button>
            </td>
        </tr>
        </tbody>

    )
}

export default CategoryItem