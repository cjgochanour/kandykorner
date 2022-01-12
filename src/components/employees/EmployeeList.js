import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const EmployeeList = () => {
    const [employees, getEmployee] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:8088/employees?_expand=location")
            .then((res) => res.json())
            .then((data) => getEmployee(data));
    }, []);

    return (
        <>
            <h2>Employee List</h2>
            <button onClick={() => history.push("employee/create")}>Hire Employee</button>
            {employees.map((employee) => {
                return (
                    <p key={`employee--${employee.id}`}>
                        {employee.name} works at {employee.location.address}
                    </p>
                );
            })}
        </>
    );
};
