import React from "react";
import TodoNav from "../Component/TodoNav";
import Sidebar from "../Component/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Task = () => {
  const { user } = useSelector((state) => state);

  if (!user) {
    return <Navigate to="/register" />;
  }
  return (
    <>
      <div>
        <TodoNav />
      </div>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Task;
