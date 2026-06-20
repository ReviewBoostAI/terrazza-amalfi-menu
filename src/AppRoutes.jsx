import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Pizza from "./pages/Pizza";
import Cafe from "./pages/Cafe";
import Cocktail from "./pages/Cocktail";

// Admin
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import EditMenu from "./pages/admin/EditMenu";

// 404
function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f6f3ef",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          margin: 0,
          color: "#6B4A34",
        }}
      >
        404
      </h1>

      <p
        style={{
          color: "#777",
          fontSize: "18px",
        }}
      >
        Pagina non trovata
      </p>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* MENU */}
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/cocktail" element={<Cocktail />} />

        {/* ADMIN */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/menu" element={<EditMenu />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}