import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Notification from "../components/Notification";
import Loading from "../components/Loading";

export default function Register() {
  const navigate = useNavigate();
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    message: "",
    color: "",
  });

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setSelectedFileName(selectedFile ? selectedFile.name : "");
  };

  const [formData, setFormData] = useState({
    finca: "",
    cedula: "",
    licencia: "",
    ica: "",
    rol: "",
    nombre: "",
    apellido: "",
    email: "",
    date: "",
    password: "",
    confirmPassword: "",
  });
  const [alert, setAlert] = useState("");

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const {
      finca,
      cedula,
      licencia,
      ica,
      rol,
      nombre,
      apellido,
      email,
      date,
      password,
      confirmPassword,
    } = formData;
    if (
      !finca ||
      !cedula ||
      !licencia ||
      !ica ||
      !rol ||
      !nombre ||
      !apellido ||
      !email ||
      !date ||
      !password ||
      !confirmPassword
    ) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    if (password !== confirmPassword) {
      setAlert("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setNotificationMessage({
        message:
          "Registro exitoso, redirigiendo a la pagina de inicio de sesion...",
        color: "success",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setNotificationMessage({
        message: "An error occurred: " + error,
        color: "error",
      });
    } finally {
      setShowNotification(true);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {showNotification && (
        <Notification
          message={notificationMessage.message}
          color={notificationMessage.color}
        />
      )}
      <div className="flex flex-col justify-center items-center p-8 bg-white rounded-md gap-2">
        <div className="flex w-full gap-20">
          <div className="flex w-full flex-col">
            {alert && <p className="text-red">{alert}</p>}
            <h4 className="text-secondary-200 font-bold">
              Bienvenido a SISGAN
            </h4>
            <h2 className="font-bold text-3xl">Formulario de Registro</h2>
          </div>
          <img className="w-14" src="/logo.jpeg" alt="logo sisgan" />
        </div>
        <hr className="bg-secondary-100 w-full h-0.5" />
        <form
          className="flex flex-col items-left w-full gap-4 text-secondary-200"
          onSubmit={handleSubmit}
        >
          <p>Datos empresariales</p>
          <div className="w-full flex gap-6">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="text"
              name="finca"
              value={formData.finca}
              placeholder="Nombre de la finca"
              onChange={handleInputChange}
            />
            <div className="w-full flex gap-6">
              <label
                htmlFor="fileInput"
                className="w-full py-2 px-6 rounded-md bg-secondary-100 cursor-pointer"
              >
                {selectedFileName || "Marca"}
              </label>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
          </div>
          <hr className="bg-secondary-100 w-full h-0.5" />
          <p>Datos de Identificacion</p>
          <div className="w-full flex gap-6">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="number"
              name="cedula"
              value={formData.cedula}
              placeholder="Cedula de ciudadania"
              onChange={handleInputChange}
            />
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="number"
              name="licencia"
              value={formData.licencia}
              placeholder="Licencia de conduccion"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex gap-6">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="text"
              name="ica"
              value={formData.ica}
              placeholder="Identificacfion del ICA"
              onChange={handleInputChange}
            />
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="text"
              name="rol"
              value={formData.rol}
              placeholder="Seleccione su rol"
              onChange={handleInputChange}
            />
          </div>
          <hr className="bg-secondary-100 w-full h-0.5" />
          <p>Datos personales</p>
          <div className="w-full flex gap-6">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="text"
              name="nombre"
              value={formData.nombre}
              placeholder="Nombre"
              onChange={handleInputChange}
            />
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="text"
              name="apellido"
              value={formData.apellido}
              placeholder="Apellido"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex gap-6">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Correo electronico"
              onChange={handleInputChange}
            />
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="date"
              name="date"
              value={formData.date}
              placeholder="Fecha de nacimiento"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex gap-6">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Contraseña"
              onChange={handleInputChange}
            />
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirmar contraseña"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="w-full bg-primary-100 text-white rounded-md p-2"
            type="submit"
          >
            Registrarse
          </button>
        </form>
        <p className="text-sm">
          ¿Ya tienes una cuenta?{" "}
          <NavLink to={"/login"} className="text-primary-100">
            Ingresa aqui
          </NavLink>
        </p>
      </div>
    </div>
  );
}
