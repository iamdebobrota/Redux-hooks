import React, { useEffect } from "react";
import { Alert, CircularProgress } from "@mui/material";
import Todo from "./Todo";
import Done from "./Done";
import Progress from "./Progress";
import { getTodo } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
const Todos = () => {
  const { isLoading, isError } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return isLoading ? (
    <div className="mt-20">
      <CircularProgress />
    </div>
  ) : (
    <>
      {isError ? (
        <Alert variant="outlined" security="error">
          Something went wrong. Check internet connection.
        </Alert>
      ) : (
        ""
      )}
      <div className="flex w-full mt-10 mx-20">
        <Todo />
        <Progress />
        <Done />
      </div>
    </>
  );
};

export default Todos;
