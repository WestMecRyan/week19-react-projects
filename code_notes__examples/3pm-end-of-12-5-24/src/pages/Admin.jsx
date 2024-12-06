import { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";
import axios from "axios";

export default function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <EmployeeList />
    </div>
  );
}
