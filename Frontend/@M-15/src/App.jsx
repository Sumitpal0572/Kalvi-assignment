import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<div>About Us Page</div>} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<div>Contact Us Page</div>} />
        <Route path="/login" element={<div>Login/SignUp Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
