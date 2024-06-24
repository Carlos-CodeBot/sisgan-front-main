import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ApiService from "../api/ApiService";
import Loading from "../components/Loading";
import Notification from "../components/Notification";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    message: "",
    color: "",
  });

  const handleLogin = async () => {
    const fakeResponse = { token: "fakeToken" };
    localStorage.setItem("token", fakeResponse.token);

    setLoading(true);
    try {
      const response = await ApiService.post("/auth/login", {
        username,
        password,
      });
      console.log("Response:", response);
      setNotificationMessage({
        message: "Login exitoso " + response.data.message,
        color: "success",
      });
      // setTimeout(() => {
      //   if (fakeResponse.token) {
      //     navigate("/home");
      //   }
      // }, 2000);
    } catch (error) {
      setNotificationMessage({
        message: "An error occurred: " + error,
        color: "error",
      });
    } finally {
      setLoading(false);
      setShowNotification(true);
    }
    setTimeout(() => {
      if (fakeResponse.token) {
        navigate("/home");
      }
    }, 2000);
  };

  if (loading) return <Loading />;

  return (
    <div className="flex justify-center items-center h-screen">
      {showNotification && (
        <Notification
          message={notificationMessage.message}
          color={notificationMessage.color}
        />
      )}
      <div className="flex flex-col justify-center items-center p-8 bg-white rounded-md gap-2">
        <img className="w-32" src="/logo.jpeg" alt="logo sisgan" />
        <h2 className="font-bold text-3xl">Bienvenido a SISGAN</h2>
        <p className="text-sm">
          ¿No tienes una cuenta?{" "}
          <NavLink to={"/"} className="text-primary-100">
            Registrate aqui
          </NavLink>
        </p>
        <form
          className="flex flex-col items-center w-full mt-4 gap-4"
          onSubmit={handleLogin}
        >
          <div className="w-full">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="text"
              value={username}
              placeholder="Cedula de ciudadania"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-full">
            <input
              className="w-full py-2 px-6 rounded-md bg-secondary-100"
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-primary-100 text-white rounded-md p-2"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
