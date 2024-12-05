import { useEffect, useState } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("http://localhost:5000/api/groceries");
        setGroceries(response.data);
        if (!groceries) {
          throw new Error("groceries is malformed");
        }
      } catch (err) {
        console.error("problem fetching groceries with axios", err);
      }
    }
    fetchGroceries();
  }, []);

  useEffect(() => {
    console.log(groceries);
  }, [groceries]);

  return (
    <div>
      <h1>Groceries</h1>
      <GroceryList items={groceries}></GroceryList>
    </div>
  );
}
