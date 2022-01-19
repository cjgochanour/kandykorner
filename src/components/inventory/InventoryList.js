import React, { useEffect, useState } from "react";
import { getAllProducts } from "../ApiManager.js";
import "./Inventory.css";

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
        <ul className="inventoryList">
            {products.map((product) => (
                <li className="inventoryList--item" key={product.id}>
                    {product.name} |{" "}
                    {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}{" "}
                    | {product.productType.type}
                </li>
            ))}
        </ul>
    );
};
