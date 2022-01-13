import { useEffect, useState } from "react";

export const ProductsList = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
            .then((res) => res.json())
            .then((data) => setProducts(data));
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
        fetch("http://localhost:8088/purchases", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        }).then(() => {
            fetchProducts();
            window.alert("Order Created!");
        });
    };

    return (
        <>
            <h2>Products</h2>
            {products.map((product) => {
                return (
                    <>
                        <p key={`product--${product.id}`}>
                            {product.name} | $ {product.price} | {product.productType.type}
                            <button value={product.id} onClick={makePurchase}>
                                Purchase
                            </button>
                        </p>
                    </>
                );
            })}
        </>
    );
};
