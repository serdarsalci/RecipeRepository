import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = ({ setShowLogin }) => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Please enter email."),
    password: Yup.string().required("Enter password").min(4),
  });

  let navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLoginSubmit = async () => {
    const { email, password } = getValues();

    try {
      await loginUser(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <h2>Welcome Back!</h2>
      <fieldset>
        <legend>Log In</legend>
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              formNoValidate
            />
          </li>
          <p className="validationError">{errors.email?.message}</p>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              formNoValidate
            />
          </li>
          <p className="validationError">{errors.password?.message}</p>
          {/* <li>
              <i />
              <div onClick={() => setCurrentView("PWReset")} href="#">
                Forgot Password?
              </div>
            </li> */}
        </ul>
      </fieldset>
      <button type="submit">Login</button>
      <button type="button" onClick={() => setShowLogin(false)}>
        Create an Account
      </button>
    </form>
  );
};

export default Login;
