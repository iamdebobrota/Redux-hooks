import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { addUser } from "../Redux/action";
import { Alert, AlertTitle } from "@mui/material";
const Signup = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { user, isLoading, isError } = useSelector((state) => state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(form));
  };

  if (user) {
    return <Navigate to={"/profile"} />;
  }

  return isLoading ? (
    <div className="mt-20">
      <CircularProgress />
    </div>
  ) : (
    <section className="text-gray-600 body-font relative mt-10">
      {isError && (
          <Alert severity="error" className="w-1/2 m-auto">
            <AlertTitle className="text-left">Error</AlertTitle>
            This is an error alert — <strong>Something went wrong</strong>
          </Alert>
        )}
      <div className="container px-5 py-24 mx-auto flex">
        <div className="md:w-1/2 bg-white rounded-lg p-8 flex flex-col m-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-4 font-medium title-font underline">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
