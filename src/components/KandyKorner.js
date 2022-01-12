import React from "react";
import { Route, Redirect } from "react-router-dom";
import { NavBar } from "./nav/NavBar.js";
import { ApplicationViews } from "./ApplicationViews.js";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const KandyKorner = () => {
    return (
        <>
            <Route
                render={() => {
                    if (localStorage.getItem("kandy_customer")) {
                        return (
                            <>
                                <NavBar />
                                <h1>Kandy Korner</h1>
                                <ApplicationViews />
                            </>
                        );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </>
    );
};
