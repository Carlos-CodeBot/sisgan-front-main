/* eslint-disable @typescript-eslint/no-explicit-any */
import Create from "../components/Create";
import { useLocation } from "react-router-dom";
import ApiService from "../api/ApiService";
import { useState, useEffect } from "react";

// Define the type for a lot
interface Lot {
  id: string;
  lotName: string;
}

export default function RegistrarGanado() {
  const location = useLocation();
  const { data, isEdit } = location.state || {};

  const [lots, setLots] = useState<Lot[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.get("/lots/all");
        setLots(response);
      } catch (error) {
        console.error("Error fetching lots data:", error);
      }
    };

    fetchData();
  }, []);

  const fields = [
    { name: "birthDate", label: "Fecha de nacimiento", type: "date" },
    { name: "weight", label: "Peso", type: "number" },
    { name: "height", label: "Altura", type: "number" },
    {
      name: "sex",
      label: "Sexo",
      type: "select",
      options: [
        { label: "Macho", value: "M" },
        { label: "Hembra", value: "H" },
      ],
    },
    { name: "breed", label: "Raza", type: "text" },
    {
      name: "lotId",
      label: "Lote",
      type: "select",
      options: lots.map((lot) => ({ label: lot.lotName, value: lot.id })),
    },
  ];

  return (
    <div>
      {
        <Create
          fieldConfigurations={fields}
          endpoint={"/cattle/save"}
          update="/cattle/patch"
          initialData={data}
          isEdit={isEdit}
        />
      }
    </div>
  );
}
