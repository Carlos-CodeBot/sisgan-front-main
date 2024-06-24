import Create from "../components/Create";
import { useLocation } from "react-router-dom";

export default function RegistrarUsuario() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const fields = [
    { name: "Nombre de la finca", type: "text" },
    { name: "Marca", type: "file" },
    { name: "Cedula de ciudadania", type: "number" },
    { name: "Licencia de conduccion", type: "number" },
    { name: "Identificacino del ICA", type: "number" },
    { name: "Rol", type: "select", options: ["A", "B"] },
    { name: "Nombre", type: "text" },
    { name: "Apellido", type: "text" },
    { name: "Correo electronico", type: "email" },
    { name: "Fecha de nacimiento", type: "date" },
    { name: "Contraseña", type: "password" },
    { name: "Confirmar contraseña", type: "password" },
  ];
  return (
    <Create
      fieldConfigurations={fields}
      endpoint={"/usuario/registrar"}
      initialData={data}
      isEdit={isEdit}
    />
  );
}
