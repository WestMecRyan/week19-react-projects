import { useEffect, useState } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";

export default function Groceries() {
  return (
    <div>
      <h1>Groceries</h1>
      <GroceryList></GroceryList>
    </div>
  );
}
