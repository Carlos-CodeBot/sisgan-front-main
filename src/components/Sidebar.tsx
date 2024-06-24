import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [sidebarHeight, setSidebarHeight] = useState("auto");

  useEffect(() => {
    const calculateSidebarHeight = () => {
      const headerHeight = document.getElementById("header")?.clientHeight || 0;
      const windowHeight = window.innerHeight;
      const remainingHeight = windowHeight - headerHeight;
      setSidebarHeight(`${remainingHeight}px`);
    };

    calculateSidebarHeight();
    window.addEventListener("resize", calculateSidebarHeight);
    return () => {
      window.removeEventListener("resize", calculateSidebarHeight);
    };
  }, []);

  return (
    <div
      className="h-full px-6 py-2 bg-white w-80 flex flex-col gap-y-2"
      style={{ height: sidebarHeight }}
    >
      <div className="flex w-full items-center gap-x-2">
        <img src="/logo.jpeg" className="w-12" alt="logo sisgan" />
        <h1 className="font-bold text-3xl">SISGAN</h1>
      </div>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center px-4 py-2 rounded-md bg-primary-200 text-primary-300 font-semibold"
            : "flex gap-3 items-center px-4 py-2 rounded-md hover:bg-gray-200"
        }
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8484 0.75149C10.6234 0.526525 10.3182 0.400146 10 0.400146C9.68185 0.400146 9.37668 0.526525 9.15165 0.75149L0.751649 9.15149C0.533059 9.37781 0.412106 9.68093 0.41484 9.99557C0.417574 10.3102 0.543777 10.6112 0.766267 10.8337C0.988757 11.0562 1.28973 11.1824 1.60437 11.1851C1.919 11.1878 2.22213 11.0669 2.44845 10.8483L2.80005 10.4967V18.3999C2.80005 18.7182 2.92648 19.0234 3.15152 19.2484C3.37656 19.4735 3.68179 19.5999 4.00005 19.5999H6.40005C6.71831 19.5999 7.02353 19.4735 7.24858 19.2484C7.47362 19.0234 7.60005 18.7182 7.60005 18.3999V15.9999C7.60005 15.6816 7.72648 15.3764 7.95152 15.1514C8.17657 14.9263 8.48179 14.7999 8.80005 14.7999H11.2C11.5183 14.7999 11.8235 14.9263 12.0486 15.1514C12.2736 15.3764 12.4 15.6816 12.4 15.9999V18.3999C12.4 18.7182 12.5265 19.0234 12.7515 19.2484C12.9766 19.4735 13.2818 19.5999 13.6 19.5999H16C16.3183 19.5999 16.6235 19.4735 16.8486 19.2484C17.0736 19.0234 17.2001 18.7182 17.2001 18.3999V10.4967L17.5516 10.8483C17.778 11.0669 18.0811 11.1878 18.3957 11.1851C18.7104 11.1824 19.0113 11.0562 19.2338 10.8337C19.4563 10.6112 19.5825 10.3102 19.5853 9.99557C19.588 9.68093 19.467 9.37781 19.2485 9.15149L10.8484 0.75149Z"
            fill="#2D3748"
          />
        </svg>
        <label className="cursor-pointer">Inicio</label>
      </NavLink>
      <hr className="block bg-secondary-100 h-0.5" />
      <h3 className="text-secondary-200 font-semibold">Ganado</h3>
      <NavLink
        to="/ganado"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center px-4 py-2 rounded-md bg-primary-200 text-primary-300 font-semibold"
            : "flex gap-3 items-center px-4 py-2 rounded-md hover:bg-gray-200"
        }
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 6C7 5.44772 7.44772 5 8 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H8C7.44772 7 7 6.55228 7 6Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 12C7 11.4477 7.44772 11 8 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H8C7.44772 13 7 12.5523 7 12Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 18C7 17.4477 7.44772 17 8 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H8C7.44772 19 7 18.5523 7 18Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6C2 5.44772 2.44772 5 3 5H3.01C3.56228 5 4.01 5.44772 4.01 6C4.01 6.55228 3.56228 7 3.01 7H3C2.44772 7 2 6.55228 2 6Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 11.4477 2.44772 11 3 11H3.01C3.56228 11 4.01 11.4477 4.01 12C4.01 12.5523 3.56228 13 3.01 13H3C2.44772 13 2 12.5523 2 12Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 18C2 17.4477 2.44772 17 3 17H3.01C3.56228 17 4.01 17.4477 4.01 18C4.01 18.5523 3.56228 19 3.01 19H3C2.44772 19 2 18.5523 2 18Z"
            fill="#276749"
          />
        </svg>
        <label className="cursor-pointer">Listar Ganado</label>
      </NavLink>
      <NavLink
        to="/registrar-ganado"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center px-4 py-2 rounded-md bg-primary-200 text-primary-300 font-semibold"
            : "flex gap-3 items-center px-4 py-2 rounded-md hover:bg-gray-200"
        }
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0.25C4.62391 0.25 0.25 4.62391 0.25 10C0.25 15.3761 4.62391 19.75 10 19.75C15.3761 19.75 19.75 15.3761 19.75 10C19.75 4.62391 15.3761 0.25 10 0.25ZM13.75 10.75H10.75V13.75C10.75 13.9489 10.671 14.1397 10.5303 14.2803C10.3897 14.421 10.1989 14.5 10 14.5C9.80109 14.5 9.61032 14.421 9.46967 14.2803C9.32902 14.1397 9.25 13.9489 9.25 13.75V10.75H6.25C6.05109 10.75 5.86032 10.671 5.71967 10.5303C5.57902 10.3897 5.5 10.1989 5.5 10C5.5 9.80109 5.57902 9.61032 5.71967 9.46967C5.86032 9.32902 6.05109 9.25 6.25 9.25H9.25V6.25C9.25 6.05109 9.32902 5.86032 9.46967 5.71967C9.61032 5.57902 9.80109 5.5 10 5.5C10.1989 5.5 10.3897 5.57902 10.5303 5.71967C10.671 5.86032 10.75 6.05109 10.75 6.25V9.25H13.75C13.9489 9.25 14.1397 9.32902 14.2803 9.46967C14.421 9.61032 14.5 9.80109 14.5 10C14.5 10.1989 14.421 10.3897 14.2803 10.5303C14.1397 10.671 13.9489 10.75 13.75 10.75Z"
            fill="#2D3748"
          />
        </svg>

        <label className="cursor-pointer">Registrar Ganado</label>
      </NavLink>

      <hr className="block bg-secondary-100 h-0.5" />
      <h3 className="text-secondary-200 font-semibold">Movimiento Interno</h3>
      <NavLink
        to="/movimiento"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center px-4 py-2 rounded-md bg-primary-200 text-primary-300 font-semibold"
            : "flex gap-3 items-center px-4 py-2 rounded-md hover:bg-gray-200"
        }
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 6C7 5.44772 7.44772 5 8 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H8C7.44772 7 7 6.55228 7 6Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 12C7 11.4477 7.44772 11 8 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H8C7.44772 13 7 12.5523 7 12Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 18C7 17.4477 7.44772 17 8 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H8C7.44772 19 7 18.5523 7 18Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6C2 5.44772 2.44772 5 3 5H3.01C3.56228 5 4.01 5.44772 4.01 6C4.01 6.55228 3.56228 7 3.01 7H3C2.44772 7 2 6.55228 2 6Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 11.4477 2.44772 11 3 11H3.01C3.56228 11 4.01 11.4477 4.01 12C4.01 12.5523 3.56228 13 3.01 13H3C2.44772 13 2 12.5523 2 12Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 18C2 17.4477 2.44772 17 3 17H3.01C3.56228 17 4.01 17.4477 4.01 18C4.01 18.5523 3.56228 19 3.01 19H3C2.44772 19 2 18.5523 2 18Z"
            fill="#276749"
          />
        </svg>
        <label className="cursor-pointer">Listar Movimientos</label>
      </NavLink>
      <NavLink
        to="/registrar-movimiento"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center px-4 py-2 rounded-md bg-primary-200 text-primary-300 font-semibold"
            : "flex gap-3 items-center px-4 py-2 rounded-md hover:bg-gray-200"
        }
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0.25C4.62391 0.25 0.25 4.62391 0.25 10C0.25 15.3761 4.62391 19.75 10 19.75C15.3761 19.75 19.75 15.3761 19.75 10C19.75 4.62391 15.3761 0.25 10 0.25ZM13.75 10.75H10.75V13.75C10.75 13.9489 10.671 14.1397 10.5303 14.2803C10.3897 14.421 10.1989 14.5 10 14.5C9.80109 14.5 9.61032 14.421 9.46967 14.2803C9.32902 14.1397 9.25 13.9489 9.25 13.75V10.75H6.25C6.05109 10.75 5.86032 10.671 5.71967 10.5303C5.57902 10.3897 5.5 10.1989 5.5 10C5.5 9.80109 5.57902 9.61032 5.71967 9.46967C5.86032 9.32902 6.05109 9.25 6.25 9.25H9.25V6.25C9.25 6.05109 9.32902 5.86032 9.46967 5.71967C9.61032 5.57902 9.80109 5.5 10 5.5C10.1989 5.5 10.3897 5.57902 10.5303 5.71967C10.671 5.86032 10.75 6.05109 10.75 6.25V9.25H13.75C13.9489 9.25 14.1397 9.32902 14.2803 9.46967C14.421 9.61032 14.5 9.80109 14.5 10C14.5 10.1989 14.421 10.3897 14.2803 10.5303C14.1397 10.671 13.9489 10.75 13.75 10.75Z"
            fill="#2D3748"
          />
        </svg>

        <label className="cursor-pointer">Registrar Movimiento</label>
      </NavLink>

      <hr className="block bg-secondary-100 h-0.5" />
      <h3 className="text-secondary-200 font-semibold">Administrador</h3>
      <NavLink
        to="/usuario"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center px-4 py-2 rounded-md bg-primary-200 text-primary-300 font-semibold"
            : "flex gap-3 items-center px-4 py-2 rounded-md hover:bg-gray-200"
        }
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 6C7 5.44772 7.44772 5 8 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H8C7.44772 7 7 6.55228 7 6Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 12C7 11.4477 7.44772 11 8 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H8C7.44772 13 7 12.5523 7 12Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 18C7 17.4477 7.44772 17 8 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H8C7.44772 19 7 18.5523 7 18Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6C2 5.44772 2.44772 5 3 5H3.01C3.56228 5 4.01 5.44772 4.01 6C4.01 6.55228 3.56228 7 3.01 7H3C2.44772 7 2 6.55228 2 6Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12C2 11.4477 2.44772 11 3 11H3.01C3.56228 11 4.01 11.4477 4.01 12C4.01 12.5523 3.56228 13 3.01 13H3C2.44772 13 2 12.5523 2 12Z"
            fill="#276749"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 18C2 17.4477 2.44772 17 3 17H3.01C3.56228 17 4.01 17.4477 4.01 18C4.01 18.5523 3.56228 19 3.01 19H3C2.44772 19 2 18.5523 2 18Z"
            fill="#276749"
          />
        </svg>
        <label className="cursor-pointer">Listar Usuarios</label>
      </NavLink>
      <NavLink
        to="/registrar-usuario"
        className={({ isActive }) =>
          isActive
            ? "flex gap-3 items-center px-4 py-2 rounded-md bg-primary-200 text-primary-300 font-semibold"
            : "flex gap-3 items-center px-4 py-2 rounded-md hover:bg-gray-200"
        }
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0.25C4.62391 0.25 0.25 4.62391 0.25 10C0.25 15.3761 4.62391 19.75 10 19.75C15.3761 19.75 19.75 15.3761 19.75 10C19.75 4.62391 15.3761 0.25 10 0.25ZM13.75 10.75H10.75V13.75C10.75 13.9489 10.671 14.1397 10.5303 14.2803C10.3897 14.421 10.1989 14.5 10 14.5C9.80109 14.5 9.61032 14.421 9.46967 14.2803C9.32902 14.1397 9.25 13.9489 9.25 13.75V10.75H6.25C6.05109 10.75 5.86032 10.671 5.71967 10.5303C5.57902 10.3897 5.5 10.1989 5.5 10C5.5 9.80109 5.57902 9.61032 5.71967 9.46967C5.86032 9.32902 6.05109 9.25 6.25 9.25H9.25V6.25C9.25 6.05109 9.32902 5.86032 9.46967 5.71967C9.61032 5.57902 9.80109 5.5 10 5.5C10.1989 5.5 10.3897 5.57902 10.5303 5.71967C10.671 5.86032 10.75 6.05109 10.75 6.25V9.25H13.75C13.9489 9.25 14.1397 9.32902 14.2803 9.46967C14.421 9.61032 14.5 9.80109 14.5 10C14.5 10.1989 14.421 10.3897 14.2803 10.5303C14.1397 10.671 13.9489 10.75 13.75 10.75Z"
            fill="#2D3748"
          />
        </svg>

        <label className="cursor-pointer">Registrar Usuario</label>
      </NavLink>
    </div>
  );
}
