import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import FetchData from "../api/FetchData";
import Table from "../components/Table";
import Notification from "../components/Notification";

export default function Ganado() {
  const { data, loading, error } = FetchData("/health/say-hello");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    message: "",
    color: "",
  });

  useEffect(() => {
    if (error) {
      setNotificationMessage({
        message: "An error occurred: " + error,
        color: "error",
      });
      setShowNotification(true);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  const dataTable = data ? data : [];

  return (
    <div>
      {showNotification && (
        <Notification
          message={notificationMessage.message}
          color={notificationMessage.color}
        />
      )}
      <Table data={dataTable} link={"/registrar-ganado"} />
    </div>
  );
}
