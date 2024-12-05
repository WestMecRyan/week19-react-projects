import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get(
          "http://localhost:5000/dummy-data/groceries"
        );
        setGroceries(response.data);
      } catch (err) {
        console.error("there was an error", err);
      }
    }
    fetchGroceries();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("groceries", JSON.stringify(groceries));

    console.log(JSON.parse(sessionStorage.getItem("groceries")))\;
  }, [groceries]);

  return (
    <div>
      <h1>Groceries</h1>
      <GroceryList />
    </div>
  );
}
