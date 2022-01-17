import React, { useEffect, useState } from "react";
import { getAllProducts, getUserPurchases } from "../ApiManager.js";

export const OrdersList = () => {
    const [purchases, updatePurchases] = useState([]);
    const [products, updateProducts] = useState([]);

    const createLineItem = (product) => {
        let line = 0;
        let total = 0;
        for (const purchase of purchases) {
            if (purchase.productId === product.id) {
                line += 1;
                total += product.price;
            }
        }
        if (line === 0) {
            return "";
        } else {
            return (
                <section className="order" key={`product--${product.id}`}>
                    <div className="order__product">Kandy Purchased: {product.name}</div>
                    <div className="order__quantity">Quantity: {line}</div>
                    <div className="order__price">
                        Total Cost:{" "}
                        {total.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </div>
                </section>
            );
        }
    };

    useEffect(() => {
        getUserPurchases().then((data) => {
            updatePurchases(data);
        });
    }, []);
    useEffect(() => {
        getAllProducts().then((data) => {
            updateProducts(data);
        });
    }, []);

    return (
        <>
            <h2>My Orders</h2>
            {products.map((product) => createLineItem(product))}
        </>
    );
};
