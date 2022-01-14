import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserPurchases } from "../ApiManager.js";

export const OrdersList = () => {
    const [purchases, updatepurchases] = useState([]);

    useEffect(() => {
        getUserPurchases().then((data) => {
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
