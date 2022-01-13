import React from "react";
import { Route } from "react-router-dom";
import { LocationsList } from "./locations/LocationsList.js";
import { ProductsList } from "./products/ProductsList.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { EmployeeForm } from "./employees/EmployeeForm.js";
import { CustomerList } from "./customers/CustomerList.js";
import { OrdersList } from "./orders/OrdersList.js";
import { Order } from "./orders/Order.js";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationsList />
            </Route>
            <Route path="/products">
                <ProductsList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employee/create">
                <EmployeeForm />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/purchases">
                <OrdersList />
            </Route>
            <Route exact path="/purchases/:purchaseId(\d+)">
                <Order />
            </Route>
        </>
    );
};
