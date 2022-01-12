import React from "react";
import { Route } from "react-router-dom";
import { LocationsList } from "./locations/LocationsList.js";
import { ProductsList } from "./products/ProductsList.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { EmployeeForm } from "./employees/EmployeeForm.js";

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
        </>
    );
};
