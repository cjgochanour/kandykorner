import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link " to="/locations">
                    Locations
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navBar__link" to="/products">
                    Products
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navBar__link" to="/employees">
                    Employees
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navBar__link" to="/inventory">
                    Inventory
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navBar__link" to="/customers">
                    Customers
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navBar__link" to="/purchases">
                    My Orders
                </Link>
            </li>
        </ul>
    );
};
