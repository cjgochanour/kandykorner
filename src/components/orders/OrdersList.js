import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const OrdersList = () => {
    const [purchases, updatepurchases] = useState([]);

    useEffect(() => {
        fetch(
            `http://localhost:8088/purchases?_expand=customer&_expand=employee&customerId=${localStorage.getItem(
                "kandy_customer"
            )}`
        )
            .then((res) => res.json())
            .then((data) => {
                updatepurchases(data);
            });
    }, []);

    return (
        <>
            <h2>My Orders</h2>
            {purchases.map((purchase) => {
                return (
                    <p key={`purchase--${purchase.id}`}>
                        <Link to={`/purchases/${purchase.id}`}>Order #{purchase.id}</Link>
                    </p>
                );
            })}
        </>
    );
};
