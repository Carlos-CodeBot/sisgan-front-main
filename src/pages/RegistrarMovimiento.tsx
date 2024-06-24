import Create from "../components/Create";
import { useLocation } from "react-router-dom";

export default function RegistrarMovimiento() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const fields = [
    { name: "Origen", type: "text" },
    { name: "Destino", type: "text" },
    { name: "Fecha de aplicación", type: "date" },
    { name: "Fecha de movilización", type: "date" },
    { name: "Placa del vehículo", type: "text" },
    { name: "Identificación del transportador", type: "number" },
    { name: "Firma del solicitante", type: "file" },
    { name: "Firma del funcionario del ICA", type: "file" },
  ];
  return (
    <Create
      fieldConfigurations={fields}
      endpoint={"/movimiento/registrar"}
      initialData={data}
      isEdit={isEdit}
    />
  );
}
