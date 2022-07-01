import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const { todo, inProgress, done } = useSelector((state) => state);

  return (
    <div className="border-2 m-20 px-10">
      <h1 className="text-3xl font-bold">Summary</h1>
      <p>Todo {todo.length}</p>
      <p>In Progress {inProgress.length}</p>
      <p>Done {done.length}</p>
    </div>
  );
};

export default Summary;
