import FetchData from "../api/FetchData";
import Loading from "../components/Loading";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import Notification from "../components/Notification";

export default function Movimiento() {
  const { data, loading, error } = FetchData("/ica-official/movements");
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
      placa: item.vehiclePlate,
      origen: item.origin,
      destino: item.destination,
      "fecha aplicacion": item.applicationDate,
      "fecha movilizacion": item.movementDate,
    };
  });

  let editData = null;
  if (data != null) {
    editData = data.map((item) => {
      return {
        ...item,
        transporterID: item.transporter.id,
      };
    });
  }

  return (
    <>
      {showNotification && (
        <Notification
          message={notificationMessage.message}
          color={notificationMessage.color}
        />
      )}
      <Table
        fullData={editData ? editData : []}
        data={dataTable}
        link={"/registrar-movimiento"}
        del={"/internal-movement-guide"}
      />
    </>
  );
}
