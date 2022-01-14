import { useEffect, useState } from "react";
import { getAllLocations } from "../ApiManager.js";

export const LocationsList = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getAllLocations().then((data) => setLocations(data));
    }, []);

    return (
        <>
            <h2>Locations</h2>
            {locations.map((location) => {
                return <p key={`location--${location.id}`}>{location.address}</p>;
            })}
        </>
    );
};
