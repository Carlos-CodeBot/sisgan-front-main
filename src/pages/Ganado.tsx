import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import FetchData from "../api/FetchData";
import Table from "../components/Table";
import Notification from "../components/Notification";

export default function Ganado() {
  const { data, loading, error } = FetchData("/cattle/all");
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

  let dataTable = data ? data : [];
  dataTable = dataTable.map((item) => {
    return {
      id: item.id,
      raza: item.breed,
      sexo: item.sex,
      "fecha de nacimiento": item.birthDate,
      peso: item.weight,
      altura: item.height,
      lote: item.lotId,
    };
  });

  return (
    <div>
      {showNotification && (
        <Notification
          message={notificationMessage.message}
          color={notificationMessage.color}
        />
      )}
      <Table
        fullData={data ? data : []}
        data={dataTable}
        link={"/registrar-ganado"}
        del={"/cattle/delete"}
      />
    </div>
  );
}
