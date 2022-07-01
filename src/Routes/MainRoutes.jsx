import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Signup from "../Pages/Signup";
import "../Pages/main.css";
import Profile from "../Pages/Profile";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import Task from "../Pages/Task";
import Todos from "../Pages/Todos"
import AddTodo from "../Pages/AddTodo"
import Summary from "../Pages/Summary";
import EditTodo from "../Pages/EditTodo";

const MainRoutes = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Task />}>
            <Route index element={<Todos />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/addTodo" element={<AddTodo />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/todos/:id" element={<EditTodo />} />
          </Route>
          <Route path="/register" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Provider>
    </>
  );
};

export default MainRoutes;
