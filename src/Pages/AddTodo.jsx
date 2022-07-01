import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addData } from "../Redux/action";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const AddTodo = () => {
  const { isLoading, isError } = useSelector((state) => state);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const notify = () => toast("Todo Added");
  const error = () => toast.error("Something went wrong");

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id = uuid();
    dispatch(addData(formData));
    !isError ? notify() : error();
  };
  return isLoading ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
    <>
      <div className="w-full mx-10 my-20">
        <p className="text-3xl font-bold">Add New Task</p>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <div className="w-1/2 px-20">
              <label style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                Title
              </label>
              <br />
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                required
                onChange={handleChange}
              />
              <br />
              <label style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                Description
              </label>
              <br />
              <textarea
                name="desc"
                cols="20"
                rows="5"
                placeholder="Enter Description"
                required
                onChange={handleChange}
              ></textarea>
              <br />
              <label style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                Date
              </label>
              <br />
              <input type="date" name="date" required onChange={handleChange} />
              <br />
            </div>
            <div className="w-1/2 px-20">
              <h2>Type</h2>
              <br />
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Todo"
                  onChange={handleChange}
                />
                Todo
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="type"
                  value="progress"
                  onChange={handleChange}
                />
                In Progress
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="type"
                  value="done"
                  onChange={handleChange}
                />
                Done
              </label>
              <br />
              <br />
              <h2>Tag (Multiple Possible)</h2>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="official"
                  onChange={handleChange}
                />
                Official
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="personal"
                  onChange={handleChange}
                />
                Personal
              </label>
              <br />
              <label>
                <input type="checkbox" name="others" onChange={handleChange} />{" "}
                Others
              </label>
              <br />
            </div>
          </div>
          <input type="submit" value="Add" className="cursor-pointer bg-blue-600 px-8 py-4 text-white rounded"/>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddTodo;
