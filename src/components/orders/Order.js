import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Order = () => {
    const [order, setOrder] = useState({});
    const { purchaseId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8088/purchases/${purchaseId}?_expand=product`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [purchaseId]);

    return (
        <>
            <h2>Order #{purchaseId}</h2>
            <section className="order">
                <div className="order__customer">Kandy purchased: {order.product?.name}</div>
                <div className="order__employee">Cost: {order.product?.price}</div>
            </section>
        </>
    );
};
