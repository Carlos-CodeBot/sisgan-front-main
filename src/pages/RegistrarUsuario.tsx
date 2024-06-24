import Create from "../components/Create";
import { useLocation } from "react-router-dom";

export default function RegistrarUsuario() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const fields = [
    { name: "farmName", label: "Nombre de la finca", type: "text" },
    { name: "mark", label: "Marca", type: "file" },
    { name: "idCard", label: "Cedula de ciudadania", type: "number" },
    { name: "drivingLicense", label: "Licencia de conduccion", type: "number" },
    { name: "ICAID", label: "Identificacino del ICA", type: "number" },
    {
      name: "role",
      label: "Rol",
      type: "select",
      options: [
        { label: "Tranportador", value: "TRANSPORTER" },
        { label: "ICA", value: "ICA" },
        { label: "Propietario", value: "PROPIETARY" },
      ],
    },
    { name: "firstName", label: "Nombre", type: "text" },
    { name: "lastName", label: "Apellido", type: "text" },
    { name: "email", label: "Correo electronico", type: "email" },
    { name: "birthDate", label: "Fecha de nacimiento", type: "date" },
    { name: "password", label: "Contraseña", type: "password" },
    {
      name: "confirmPassword",
      label: "Confirmar contraseña",
      type: "password",
    },
  ];

  return (
    <Create
      fieldConfigurations={fields}
      endpoint={"/usuario/registrar"}
      update="/usuario/actualizar"
      initialData={data}
      isEdit={isEdit}
    />
  );
}
