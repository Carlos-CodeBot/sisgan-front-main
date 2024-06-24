import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Index from "./layout/Index";
import Info from "./layout/Info";
import Ganado from "./pages/Ganado";
import Movimiento from "./pages/Movimiento";
import Usuario from "./pages/Usuario";
import RegistrarGanado from "./pages/RegistrarGanado";
import RegistrarMovimiento from "./pages/RegistrarMovimiento";
import RegistrarUsuario from "./pages/RegistrarUsuario";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Index />}>
          <Route element={<Info />}>
            <Route path="/home" element={<Home />} />
            <Route path="/ganado" element={<Ganado />} />
            <Route path="/movimiento" element={<Movimiento />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/registrar-ganado" element={<RegistrarGanado />} />
            <Route path="/registrar-usuario" element={<RegistrarUsuario />} />
            <Route
              path="/registrar-movimiento"
              element={<RegistrarMovimiento />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
