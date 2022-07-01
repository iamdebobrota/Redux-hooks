import React from "react";
import { NavLink } from "react-router-dom";

const TodoNav = () => {
  return (
    <div className="bg-blue-900 py-3 border-2">
      <NavLink className="mx-5 text-white" to={"./todos"}>Todos</NavLink>
      <NavLink className="mx-5 text-white" to={"./addTodo"}>Add Todo</NavLink>
      <NavLink className="mx-5 text-white" to={"./summary"}>Summary</NavLink>
    </div>
  );
};

export default TodoNav;
