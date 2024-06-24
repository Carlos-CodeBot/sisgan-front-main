import Create from "../components/Create";
import { useLocation } from "react-router-dom";

export default function RegistrarGanado() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const fields = [
    { name: "Fecha de nacimiento", type: "date" },
    { name: "Peso", type: "number" },
    { name: "Altura", type: "number" },
    { name: "Sexo", type: "select", options: ["Macho", "Hembra"] },
    { name: "Raza", type: "text" },
    { name: "Lote", type: "select", options: ["A", "B", "C"] },
  ];
  return (
    <Create
      fieldConfigurations={fields}
      endpoint={"/ganado/registrar"}
      initialData={data}
      isEdit={isEdit}
    />
  );
}
