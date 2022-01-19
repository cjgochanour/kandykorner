import React, { useState } from "react";
import { InventoryList } from "./InventoryList.js";
import { InventorySearch } from "./InventorySearch.js";

export const Inventory = () => {
    const [searchTerms, setSearchTerms] = useState("");

    return (
        <>
            <InventorySearch setSearchState={setSearchTerms} />
            <InventoryList search={searchTerms} />
        </>
    );
};
