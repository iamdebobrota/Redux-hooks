import {
  ADD_USER,
  ALL,
  DONE,
  GET_TODO,
  OTHERS,
  PROGRESS,
  TODO,
  TODO_FAILURE,
  TODO_REQ,
  USER_FAILURE,
  USER_REQ,
} from "./action";

const user = JSON.parse(localStorage.getItem("user")) || "";

const initState = {
  isAuth: user ? true : false,
  user: user,
  isError: false,
  isLoading: false,
  todos: [],
  todo: [],
  inProgress: [],
  done: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REQ:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    case ADD_USER:
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        isAuth: true,
        user: payload,
        isLoading: false,
        isError: false,
      };
    case USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        user: "",
        isLoading: false,
        isError: true,
      };

    
    case TODO_REQ:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    case TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    
    case TODO:
      return {
        ...state,
        isLoading: false,
        isError: false,
        todo: state.todos.filter((todo) => {
          return todo.type === "Todo";
        }),
      };
    case PROGRESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        inProgress: state.todos.filter((todo) => {
          return todo.type === "progress";
        }),
      };
    case DONE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        done: state.todos.filter((todo) => {
          return todo.type === "done";
        }),
      };
    case ALL:
      return {
        ...state,
        todo: state.todos.filter((todo) => {
          return todo.type === "Todo";
        }),
        inProgress: state.todos.filter((todo) => {
          return todo.type === "progress";
        }),
        done: state.todos.filter((todo) => {
          return todo.type === "done";
        }),
      };
    case OTHERS:
      return {
        ...state,
        todo: state.todos.filter((todo) => {
          return todo[payload] && todo.type === "Todo";
        }),
        inProgress: state.todos.filter((todo) => {
          return todo[payload] && todo.type === "progress";
        }),
        done: state.todos.filter((todo) => {
          return todo[payload] && todo.type === "done";
        }),
      };
    default:
      return state;
  }
};
