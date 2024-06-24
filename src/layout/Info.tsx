import { Outlet, useLocation } from "react-router-dom";

export default function Index() {
  const location = useLocation();
  const currentPath = location.pathname;
  const lastSegment = currentPath.split("/").filter(Boolean).pop();

  const formatTitle = (segment: string | undefined) => {
    if (!segment) return "Home";
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageTitle = formatTitle(lastSegment);

  return (
    <>
      <div className="flex flex-col gap-y-4 mx-12 my-8">
        <div className=" bg-white px-6 py-3 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold">{pageTitle}</h2>
        </div>
        <div className=" bg-white px-6 py-3 rounded-lg shadow-sm">
          <Outlet />
        </div>
      </div>
    </>
  );
}
