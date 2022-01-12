import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { KandyKorner } from "./components/KandyKorner.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <KandyKorner />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
