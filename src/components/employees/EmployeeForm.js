import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        locationId: null,
        isManager: false,
        isFullTime: false,
        wage: 8,
    });
    const [locations, setLocations] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:8088/locations")
            .then((res) => res.json())
            .then((data) => setLocations(data));
    });

    const saveEmployee = (event) => {
        event.preventDefault();
        const hire = {
            name: employee.name,
            locationId: employee.locationId,
            isManager: employee.isManager,
            isFullTime: employee.isFullTime,
            wage: employee.wage,
        };
        const fetchOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(hire),
        };
        fetch("http://localhost:8088/employees", fetchOptions).then(() => history.push("/employees"));
    };

    return (
        <form className="hireForm">
            <h2 className="hireForm__title">New Hire</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        required
                        autoFocus
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full name"
                        onChange={(event) => {
                            const hire = { ...employee };
                            hire.name = event.target.value;
                            setEmployee(hire);
                        }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Pay: </label>
                    <input
                        required
                        type="number"
                        name="wage"
                        className="form-control"
                        placeholder="Hourly Wage"
                        onChange={(event) => {
                            const hire = { ...employee };
                            hire.wage = parseInt(event.target.value);
                            setEmployee(hire);
                        }}
                    />
                </div>
            </fieldset>
            {locations.map((location) => {
                return (
                    <div>
                        <label>
                            {location.address}
                            <input
                                key={`location--${location.id}`}
                                name="locationId"
                                value={location.id}
                                type="radio"
                                className="form-control"
                                onChange={(event) => {
                                    const hire = { ...employee };
                                    hire.locationId = parseInt(event.target.value);
                                    setEmployee(hire);
                                }}
                            ></input>
                        </label>
                    </div>
                );
            })}
            <div>
                <label>Manager</label>
                <input
                    key="managerialStatus"
                    type="checkbox"
                    onChange={(event) => {
                        const hire = { ...employee };
                        hire.isManager = event.target.checked;
                        setEmployee(hire);
                    }}
                />
            </div>
            <div>
                <label>Full Time</label>
                <input
                    key="fullTimeStatus"
                    type="checkbox"
                    onChange={(event) => {
                        const hire = { ...employee };
                        hire.isFullTime = event.target.checked;
                        setEmployee(hire);
                    }}
                />
            </div>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    );
};
