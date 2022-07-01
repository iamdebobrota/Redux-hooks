import axios from "axios";

export const ADD_USER = "ADD_USER";
export const USER_REQ = "USER_REQ";
export const USER_FAILURE = "USER_FAILURE";
export const TODO_REQ = "TODO_REQ";
export const TODO_FAILURE = "TODO_FAILURE";
export const GET_TODO = "GET_TODO";
export const TODO = "TODO";
export const PROGRESS = "PROGRESS";
export const DONE = "DONE";
export const ALL = "ALL";
export const OTHERS = "OTHERS";

//LOGIN/ REGISTRATION
export const userReq = () => ({
  type: USER_REQ,
});

export const registerSuccess = (token) => ({
  type: ADD_USER,
  payload: token,
});

export const userFailure = (err) => ({
  type: USER_FAILURE,
  payload: err,
});

//TODO
export const todoReq = () => ({
  type: TODO_REQ,
});

export const todoSuccess = (payload) => ({
  type: GET_TODO,
  payload,
});

export const todoFailure = (err) => ({
  type: TODO_FAILURE,
  payload: err,
});



export const gettodo = () => ({
  type: TODO,
});

export const getProgress = () => ({
  type: PROGRESS,
});

export const getDone = () => ({
  type: DONE,
});

export const getAll = () => ({
  type: ALL,
});

export const getOthers = (payload) => ({
  type: OTHERS,
  payload,
});

export const addUser = (payload) => (dispatch) => {
  dispatch(userReq());
  console.log(payload);
  const { name, email, password } = payload;
  axios
    .post("https://reqres.in/api/users", {
      email,
      name,
      password,
    })
    .then((res) => dispatch(registerSuccess(res.data)))
    .catch((err) => dispatch(userFailure(err.message)));

  // localStorage.setItem("user", JSON.stringify(payload))
};

export const addData = (payload) => (dispatch) => {
  dispatch(todoReq());
  axios
    .post("http://localhost:8080/ReduxTodos", {
      ...payload,
    })
    .then(() => dispatch(getTodo()))
    .catch((err) => dispatch(todoFailure(err.message)));
};

export const getTodo = () => (dispatch) => {
  dispatch(todoReq());
  axios
    .get("http://localhost:8080/ReduxTodos")
    .then((res) => dispatch(todoSuccess(res.data)))
    .catch((err) => dispatch(todoFailure(err.message)));
};

export const updateTodo = (payload) => (dispatch) => {
  dispatch(todoReq());
  axios
    .patch(`http://localhost:8080/ReduxTodos/${payload.id}`, {
      ...payload,
    })
    .then(() => dispatch(getTodo()))
    .catch((err) => dispatch(todoFailure(err.message)));
};

export const deleteTodo = (payload) => (dispatch) => {
  dispatch(todoReq());
  axios
    .delete(`http://localhost:8080/ReduxTodos/${payload}`)
    .then(() => dispatch(getTodo()))
    .catch((err) => dispatch(todoFailure(err.message)));
};
