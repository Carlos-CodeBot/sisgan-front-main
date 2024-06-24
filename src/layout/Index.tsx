import { Outlet } from "react-router-dom";
import Verify from "../components/Verify";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Index() {
  return (
    <>
      <Verify />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-5/6">
          <Header />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
