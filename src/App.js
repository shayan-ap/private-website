import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about us/aboutUs";
import Contact from "./pages/contact us/contactUs";
import Product from "./pages/product/Product";
import Login from "./pages/login/login";
import Create from "./pages/create/create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
