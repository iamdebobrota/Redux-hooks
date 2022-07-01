import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo, gettodo } from "../Redux/action";

const Todo = () => {
  const { todo } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(gettodo());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/todos${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="w-1/3 px-5">
      <h1 className="text-2xl font-bold">Todo</h1>
      {todo.length < 1 && <p>No item to show</p>}

      <div>
        {todo.map((item) => {
          const { id, title, official, desc, personal, others, date } = item;
          return (
            <div key={id} className="border-b-2">
              <div>
                <h2>{title}</h2>
                <div>
                  <EditIcon
                    onClick={() => handleEdit(id)}
                    className="cursor-pointer"
                  />
                  <DeleteIcon
                    onClick={() => handleDelete(id)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <p>
                  {official && "official"}
                  {personal && "personal"}
                  {others && "others"}
                </p>
                <p>{date}</p>
              </div>
              <p>{desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
