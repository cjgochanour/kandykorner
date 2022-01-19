import React, { useEffect, useState } from "react";
import { getAllProducts } from "../ApiManager.js";

export const InventoryList = ({ search }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then((productsArray) => {
            if (search) {
                const filteredSearchResults = productsArray.filter((product) =>
                    product.name.toLowerCase().includes(search.toLowerCase())
                );
                setProducts(filteredSearchResults);
            } else {
                setProducts(productsArray);
            }
        });
    }, [search]);

    return (
        <ul>
            {products.map((product) => (
                <li>{product.name}</li>
            ))}
        </ul>
    );
};
