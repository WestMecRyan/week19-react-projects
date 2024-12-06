// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import Admin from "./pages/Admin";
import "./App.css";
export default function App() {
  function doSomething() {
    // do something
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries appDoSomething={doSomething} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
