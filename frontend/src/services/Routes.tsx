import Home from "../views/Home";
import Reserve from "../views/Reserve";
import About from "../views/About";
import HotelChain from "../views/HotelChain";
import AdminDashboard from "../views/AdminDashboard";
import Login from "../views/Login";
import Register from "../views/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reserve />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/rede-de-hoteis" element={<HotelChain />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
