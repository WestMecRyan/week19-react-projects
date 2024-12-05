import { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";
import axios from "axios";

export default function Admin() {
  const [employees, setEmployees] = useState([]);
  const [searchBirthdateInput, setSearchBirthdateInput] = useState("");
  const [searchDateEmployedInput, setSearchDateEmployedInput] = useState("");
  const [searchBirthdate, setSearchBirthdate] = useState("");
  const [searchDateEmployed, setSearchDateEmployed] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employees");
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchBirthdate(searchBirthdateInput);
    setSearchDateEmployed(searchDateEmployedInput);
  };

  const filteredEmployees = employees.filter(emp => {
    // Convert employee dates to 'YYYY-MM-DD' format
    const empBirthdate = new Date(emp.birthdate).toISOString().split("T")[0];
    const empDateEmployed = new Date(emp.dateEmployed)
      .toISOString()
      .split("T")[0];

    return (
      (searchBirthdate === "" || empBirthdate === searchBirthdate) &&
      (searchDateEmployed === "" || empDateEmployed === searchDateEmployed)
    );
  });

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="birthdate">Search by birthdate: </label>
          <input
            id="birthdate"
            type="date"
            value={searchBirthdateInput}
            onChange={e => setSearchBirthdateInput(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateEmployed">Search by date employed: </label>
          <input
            id="dateEmployed"
            type="date"
            value={searchDateEmployedInput}
            onChange={e => setSearchDateEmployedInput(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <EmployeeList employees={filteredEmployees} />
    </div>
  );
}
