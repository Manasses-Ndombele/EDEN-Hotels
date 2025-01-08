import Home from "../views/Home";
import Reserve from "../views/Reserve";
import About from "../views/About";
import HotelChain from "../views/HotelChain";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reserve />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/rede-de-hoteis" element={<HotelChain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
