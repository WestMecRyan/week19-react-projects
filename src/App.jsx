// src/App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Groceries from "./pages/Groceries";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/groceries" element={<Groceries />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}
