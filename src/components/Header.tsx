import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex px-8 py-2 bg-white justify-between gap-x-52">
      <div className="w-30 text-white">t</div>
      <div className="flex-grow">
        <input
          className="w-full py-2 px-6 rounded-md bg-secondary-100"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-x-2">
        <button className="flex justify-center items-center bg-primary-100 text-white w-10 rounded-full">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z"
              fill="white"
              fill-opacity="0.04"
            />
            <path d="M8 -3V-1V-3Z" fill="white" fill-opacity="0.04" />
            <path d="M8 17V19V17Z" fill="white" fill-opacity="0.04" />
            <path
              d="M0.22 0.22L1.64 1.64L0.22 0.22Z"
              fill="white"
              fill-opacity="0.04"
            />
            <path
              d="M14.36 14.36L15.78 15.78L14.36 14.36Z"
              fill="white"
              fill-opacity="0.04"
            />
            <path d="M-3 8H-1H-3Z" fill="white" fill-opacity="0.04" />
            <path d="M17 8H19H17Z" fill="white" fill-opacity="0.04" />
            <path
              d="M0.22 15.78L1.64 14.36L0.22 15.78Z"
              fill="white"
              fill-opacity="0.04"
            />
            <path
              d="M14.36 1.64L15.78 0.22L14.36 1.64Z"
              fill="white"
              fill-opacity="0.04"
            />
            <path
              d="M8 -3V-1M8 17V19M0.22 0.22L1.64 1.64M14.36 14.36L15.78 15.78M-3 8H-1M17 8H19M0.22 15.78L1.64 14.36M14.36 1.64L15.78 0.22M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="flex justify-center items-center bg-primary-100 text-white w-10 rounded-full">
          <img src="/campana.png" alt="noti" />
        </button>
        <button
          onClick={toggleMenu}
          className="flex justify-center items-center bg-primary-300 text-white w-10 rounded-full"
        >
          T
        </button>
      </div>
    </header>
  );
}
