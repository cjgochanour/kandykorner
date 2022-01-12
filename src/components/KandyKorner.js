import React from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./nav/NavBar.js";
import { ApplicationViews } from "./ApplicationViews.js";

export const KandyKorner = () => {
    return (
        <>
            <Route>
                <NavBar />
                <h1>Kandy Korner</h1>
                <ApplicationViews />
            </Route>
        </>
    );
};
