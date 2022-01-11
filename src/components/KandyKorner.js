import { LocationsList } from "./locations/LocationsList.js";
import { ProductsList } from "./products/ProductsList.js";

export const KandyKorner = () => {
    return (
        <>
            <h1>Kandy Korner</h1>
            <LocationsList />
            <ProductsList />
        </>
    );
};
