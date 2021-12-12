import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import axios from "axios";

const INITIAL_STATE = {
  user: localStorage.getItem("token"),
  isFetching: false,
  error: false,
};

const hey = {
  _id: "61b1e20e4a4c91ca8bfbc25a",
  username: "anshumalii",
  email: "anshumali@gmail.com",
  password: "$2b$10$AnbQfTw4lFBOH9edgPqgq.0RZIomY6bfKOVhoPj8zavu3xtEGPFQ2",
  profilePicture: "",
  coverPicture: "",
  followers: [
    "61afb2c0ff61454fae2cd1f5",
    "61af955a18f57bb7a91a3c00",
    "61afaf8a10cb0d0e1c3cf287",
  ],
  following: [
    { $oid: "61afb2c0ff61454fae2cd1f5" },
    { $oid: "61af955a18f57bb7a91a3c00" },
  ],
  isAdmin: false,
  desc: "",
  city: "",
  from: "",
  createdAt: { $date: "2021-12-09T11:01:34.286Z" },
  updatedAt: { $date: "2021-12-09T16:47:44.257Z" },
  __v: 2,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
