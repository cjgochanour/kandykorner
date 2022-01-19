import React from "react";

export const InventorySearch = ({ setSearchState }) => (
    <section className={"search"}>
        <label htmlFor="searchBox">
            <input
                type="text"
                name="searchBox"
                className="form-control searchBox"
                placeholder="Search"
                onChange={(event) => setSearchState(event.target.value)}
            ></input>
        </label>
    </section>
);
