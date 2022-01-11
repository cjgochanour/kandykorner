import { useEffect, useState } from "react";

export const LocationsList = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8088/locations")
            .then((res) => res.json())
            .then((data) => setLocations(data));
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
