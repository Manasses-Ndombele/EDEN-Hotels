import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../views/Home";
import Reserves from "../views/Reserves";
import About from "../views/About";
import HotelChain from "../views/HotelChain";
import AdminDashboard from "../views/AdminDashboard";
import Login from "../views/Login";
import Register from "../views/Register";
import Logout from "../views/Logout";
import ProtectedLayout from "./ProtectedLayout";

function AdminRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/admin/dashboard");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Carregando...</div>;
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<Reserves />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/rede-de-hoteis" element={<HotelChain />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/logout" element={<Logout />} />
          <Route path="/admin" element={<AdminRedirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
