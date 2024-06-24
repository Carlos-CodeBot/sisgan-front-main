import React, { useState, useEffect } from "react";

interface NotificationProps {
  message: string;
  color: string;
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  color,
  duration = 5000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  let bgColor;
  switch (color) {
    case "success":
      bgColor = "bg-green-500";
      break;
    case "error":
      bgColor = "bg-rose-500";
      break;
    case "warning":
      bgColor = "bg-yellow-500";
      break;
    default:
      bgColor = "bg-gray-500";
  }

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg`}
    >
      {message}
    </div>
  );
};

export default Notification;
