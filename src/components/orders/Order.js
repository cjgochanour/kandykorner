import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPurchase } from "../ApiManager.js";

export const Order = () => {
    const [order, setOrder] = useState({});
    const { purchaseId } = useParams();

    useEffect(() => {
        getUserPurchase(purchaseId).then((data) => setOrder(data));
    }, [purchaseId]);

    return (
        <>
            <h2>Order #{purchaseId}</h2>
            <section className="order">
                <div className="order__customer">Kandy purchased: {order.product?.name}</div>
                <div className="order__employee">Cost: ${order.product?.price.toFixed(2)}</div>
            </section>
        </>
    );
};
