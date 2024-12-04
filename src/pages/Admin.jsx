import { useEffect, useState } from "react";
import EmployeeList from "../components/EmployeeList";
import axios from "axios";

export default function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
      <EmployeeList></EmployeeList>
    </div>
  );
}

