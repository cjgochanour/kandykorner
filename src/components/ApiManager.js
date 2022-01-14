export const postOptions = (obj) => {
    return {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    };
};
export const getCustomersEmail = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`).then((res) => res.json());
};
export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers").then((res) => res.json());
};
export const postCustomer = (obj) => {
    return fetch("http://localhost:8088/customers", postOptions(obj)).then((res) => res.json());
};
export const getAllLocations = () => {
    return fetch("http://localhost:8088/locations").then((res) => res.json());
};
export const postEmployee = (obj) => {
    return fetch("http://localhost:8088/employees", postOptions(obj));
};
export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=location").then((res) => res.json());
};
export const deleteEmployee = (x) => {
    return fetch(`http://localhost:8088/employees/${x}`, { method: "DELETE" });
};
export const getAllProducts = () => {
    return fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId").then((res) => res.json());
};
export const getAllPurchases = () => {
    return fetch("http://localhost:8088/purchases").then((res) => res.json());
};
export const getUserPurchase = (id) => {
    return fetch(`http://localhost:8088/purchases/${id}?_expand=product`).then((res) => res.json());
};
export const getUserPurchases = () => {
    return fetch(
        `http://localhost:8088/purchases?_expand=customer&_expand=employee&customerId=${localStorage.getItem(
            "kandy_customer"
        )}`
    ).then((res) => res.json());
};
export const postPurchase = (obj) => {
    return fetch("http://localhost:8088/purchases", postOptions(obj));
};
