import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Verify() {
  const navigate = useNavigate();

  useEffect(() => {
    const val = checkAuthentication();
    if (!val) {
      navigate("/");
    }
  }, [navigate]);

  const checkAuthentication = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  return null;
}
