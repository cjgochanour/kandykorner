import { useEffect, useState } from "react";

export const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <h2>Products</h2>
            {products.map((product) => {
                return (
                    <p key={`product--${product.id}`}>
                        {product.id}. {product.name} | $ {product.price} | {product.productType.type}
                    </p>
                );
            })}
        </>
    );
};
