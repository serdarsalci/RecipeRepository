import React, { createContext, useReducer, useEffect } from "react";

import axios from "axios";

import AuthReducer from "./AuthReducer";

const initialState = {
  token: "",
  userEmail: "",
  isUserLoggedIn: false,
};

export const AuthContext = createContext();

const url = process.env.REACT_APP_REC_REPO_API;
const localStrg = JSON.parse(localStorage.getItem("authState"));

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(
    AuthReducer,
    localStrg || initialState
  );

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(authState));
  }, [authState]);

  const loginUser = async (email, password) => {
    try {
      const res = await axios.post(url + "Auth/login", {
        email: email,
        password: password,
      });

      dispatch({ type: "LOGIN_USER", payload: res.data });

      return {
        success: res.status,
        status: 200,
      };
    } catch (error) {
      console.log(error);

      return {
        success: false,
        status: error.response.status,
        errorMessage: error.response.data.message,
      };
    }
  };

  const getUserFavorites = async () => {
    const AuthString = "Bearer ".concat(authState.token);
    try {
      const config = {
        headers: {
          Authorization: AuthString,
        },
      };
      const res = await axios.get(url + "Recipe/getfavorites", config);

      // dispatch({ type: "SET_ENTITY_DETAILS", payload: res.data });
      return res.data;
    } catch (error) {}
  };

  const createUser = async (email, password) => {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(
        url + "Auth/register",
        {
          Email: email,
          Password: password,
        },
        {
          headers: headers,
        }
      );
      dispatch({ type: "LOGIN_USER", payload: res.data });
      return res;
    } catch (error) {
      console.log("Could not create user");
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: initialState });
  };

  const addToUserFavorites = async (id) => {
    const AuthString = "Bearer ".concat(authState.token);

    const config = {
      headers: {
        Authorization: AuthString,
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.post(
        url + `Recipe/addFavorite/${id}`,
        { recipe: id },
        config
      );

      return res;
    } catch (error) {
      console.log("Could not create user");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        loginUser,
        logout,
        loggedInUser: authState.loggedInUser,
        email: authState.userEmail,
        isUserLoggedIn: authState.isUserLoggedIn,
        getUserFavorites,
        addToUserFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
