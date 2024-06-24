import FetchData from "../api/FetchData";
import Loading from "../components/Loading";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import Notification from "../components/Notification";

export default function Movimiento() {
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
    <>
      {showNotification && (
        <Notification
          message={notificationMessage.message}
          color={notificationMessage.color}
        />
      )}
      <Table data={dataTable} link={"/registrar-movimiento"} />
    </>
  );
}
