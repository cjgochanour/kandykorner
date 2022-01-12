import React from "react";
import { Route } from "react-router-dom";
import { LocationsList } from "./locations/LocationsList.js";
import { ProductsList } from "./products/ProductsList.js";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationsList />
            </Route>
            <Route path="/products">
                <ProductsList />
            </Route>
        </>
    );
};
