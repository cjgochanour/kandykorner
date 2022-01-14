import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { deleteEmployee, getAllEmployees } from "../ApiManager.js";

export const EmployeeList = () => {
    const [employees, setEmployee] = useState([]);
    const history = useHistory();

    const fetchEmps = () => {
        getAllEmployees().then((data) => setEmployee(data));
    };

    useEffect(() => {
        fetchEmps();
    }, []);

    const urFired = (event) => {
        deleteEmployee(parseInt(event.target.value)).then(fetchEmps());
    };

    return (
        <>
            <h2>Employee List</h2>
            <button onClick={() => history.push("employee/create")}>Hire Employee</button>
            {employees.map((employee) => {
                return (
                    <p key={`employee--${employee.id}`}>
                        {employee.name} works at {employee.location.address}
                        <button value={employee.id} onClick={urFired}>
                            Fire Employee
                        </button>
                    </p>
                );
            })}
        </>
    );
};
