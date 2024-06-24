/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import ApiService from "../api/ApiService";
import Loading from "./Loading";
import Notification from "./Notification";

interface FieldConfiguration {
  name: string;
  label: string;
  type: string;
  options?: { label: string; value: string }[];
}

interface CreateFormProps {
  fieldConfigurations: FieldConfiguration[];
  endpoint: string;
  update: string;
  initialData?: { [key: string]: any };
  isEdit?: boolean;
}

const CreateForm: React.FC<CreateFormProps> = ({
  fieldConfigurations,
  endpoint,
  update,
  initialData = {},
  isEdit = false,
}) => {
  const initialFormState = fieldConfigurations.reduce((acc, field) => {
    if (field.type !== "file") {
      acc[field.name] = initialData[field.name] || "";
    }
    return acc;
  }, {} as { [key: string]: any });

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({
    message: "",
    color: "",
  });

  const description =
    "Datos del " + endpoint.split("/")[1].replace(/-/g, " ").toLowerCase();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "transporterID") {
      setFormData({
        ...formData,
        [name]: value,
        transporter: { id: value },
      });
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = isEdit
        ? await ApiService.put(`${update}/${formData.id}`, formData)
        : await ApiService.post(update, formData);
      console.log("Response:", response);
      setNotificationMessage({
        message: "Operation successful!",
        color: "success",
      });
    } catch (error) {
      setNotificationMessage({
        message: "An error occurred: " + error,
        color: "error",
      });
    } finally {
      setLoading(false);
      setShowNotification(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
  };

  useEffect(() => {
    if (isEdit && initialData.id) {
      setFormData(initialData);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white">
      {showNotification && (
        <Notification
          message={notificationMessage.message}
          color={notificationMessage.color}
        />
      )}
      <h2 className="text-2xl font-bold text-gray-500 mb-4">{description}</h2>
      <div className="grid grid-cols-2 gap-4">
        {isEdit && initialData.id ? (
          <input hidden name="id" type="number" defaultValue={initialData.id} />
        ) : (
          <></>
        )}
        {fieldConfigurations.map((field) => (
          <div key={field.name} className="w-full mb-4">
            {field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name] || ""}
                onChange={
                  handleChange as unknown as React.ChangeEventHandler<HTMLSelectElement>
                }
                className="w-full py-2 px-6 rounded-md bg-secondary-100"
              >
                <option value="" disabled>
                  Seleccione {field.label.toLowerCase()}
                </option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <input
                name={field.name}
                onFocus={(e) =>
                  field.type === "file" && (e.target.type = "file")
                }
                type={field.type === "file" ? "text" : field.type}
                placeholder={field.label}
                className="w-full py-2 px-6 rounded-md bg-secondary-100"
              />
            ) : (
              <input
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.label}
                onFocus={(e) =>
                  field.type === "date" && (e.target.type = "date")
                }
                type={field.type === "date" ? "text" : field.type}
                className="w-full py-2 px-6 rounded-md bg-secondary-100"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={handleReset}
          className="mr-2 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-700"
        >
          Limpiar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          {isEdit ? "Actualizar" : "Registrar"}
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
