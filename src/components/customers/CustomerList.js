import { useEffect, useState } from "react";
import { getAllCustomers, getAllPurchases } from "../ApiManager.js";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        getAllPurchases().then((data) => setPurchases(data));
    }, []);

    useEffect(() => {
        getAllCustomers().then((data) => {
            for (const d of data) {
                const purchasedNumber = purchases.filter((purchase) => purchase.customerId === d.id);
                d.purchasesMade = purchasedNumber.length;
            }
            data.sort((a, b) => (a.purchasesMade > b.purchasesMade ? -1 : 1));
            setCustomers(data);
        });
    }, []);

    return (
        <>
            <h2>Customer List</h2>
            {customers.map((customer) => {
                const purchasedNumber = purchases.filter((purchase) => purchase.customerId === customer.id);
                return (
                    <p key={`customer--${customer.id}`}>
                        {customer.name} has purchased{" "}
                        {purchasedNumber.length === 1
                            ? `${purchasedNumber.length} kandy`
                            : `${purchasedNumber.length} kandies`}
                        .
                    </p>
                );
            })}
        </>
    );
};
