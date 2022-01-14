import { useEffect, useState } from "react";
import { getAllProducts, postPurchase } from "../ApiManager.js";

export const ProductsList = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        getAllProducts().then((data) => setProducts(data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const makePurchase = (event) => {
        const obj = {
            locationId: 1,
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            employeeId: 1,
            productId: parseInt(event.target.value),
        };
        postPurchase(obj).then(() => {
            fetchProducts();
            window.alert("Order Created!");
        });
    };

    return (
        <>
            <h2>Products</h2>
            {products.map((product) => {
                return (
                    <p key={`product--${product.id}`}>
                        {product.name} |{" "}
                        {product.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}{" "}
                        | {product.productType.type}{" "}
                        <button value={product.id} onClick={makePurchase}>
                            Purchase
                        </button>
                    </p>
                );
            })}
        </>
    );
};
