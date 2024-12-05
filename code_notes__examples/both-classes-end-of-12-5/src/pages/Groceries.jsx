import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  const [searchCategoryInput, setSearchCategoryInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    console.log("groceries--------");
    console.log(groceries);
    const fetchGroceries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/dummy/groceries"
        );
        setGroceries(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGroceries();
  }, []);
  useEffect(() => {
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    console.log(sessionStorage.getItem("groceries"));
  }, [groceries]);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchCategory(searchCategoryInput);
    setMaxPrice(maxPriceInput);
  };

  const filteredGroceries = groceries.filter(item => {
    return (
      (searchCategory === "" ||
        item.category.toLowerCase().includes(searchCategory.toLowerCase())) &&
      (maxPrice === "" || item.price <= parseFloat(maxPrice))
    );
  });

  return (
    <div>
      <h1>Groceries</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by category"
          value={searchCategoryInput}
          onChange={e => setSearchCategoryInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPriceInput}
          onChange={e => setMaxPriceInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <GroceryList items={filteredGroceries} />
    </div>
  );
}
