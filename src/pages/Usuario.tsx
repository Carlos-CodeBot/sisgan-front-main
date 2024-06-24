import Table from "../components/Table";
import { useState, useEffect } from "react";
import FetchData from "../api/FetchData";
import Notification from "../components/Notification";
import Loading from "../components/Loading";

export default function Usuario() {
  const { data, loading, error } = FetchData("/ica-official/propietaries");
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
      nombre: item.firstName + " " + item.lastName,
      correo: item.email,
      cedula: item.idCard,
      "fecha de nacimiento": item.birthDate,
      rol: item.role,
      finca: item.farmName,
    };
  });

  let editData = null;
  if (data != null) {
    editData = data.map((item) => {
      return {
        ...item,
        password: null,
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
        link={"/registrar-usuario"}
        del=""
      />
    </>
  );
}
