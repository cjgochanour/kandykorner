import { useEffect, useState } from "react";
import { getAllCustomers } from "../ApiManager.js";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getAllCustomers().then((data) => setCustomers(data));
    }, []);

    return (
        <>
            <h2>Customer List</h2>
            {customers.map((customer) => {
                return <p key={`customer--${customer.id}`}>{customer.name}</p>;
            })}
        </>
    );
};
