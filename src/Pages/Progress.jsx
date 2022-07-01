import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getProgress } from "../Redux/action";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Progress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { inProgress } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProgress());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/todos${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="w-1/3 px-5">
      <h1 className="text-2xl font-bold">Progress</h1>
      <div>
        {inProgress.map((item) => {
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
                  {official && "official "}
                  {personal && "personal "}
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

export default Progress;
