import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <div className="header">
      <div className="">{/* <img src="/logo.png" alt="logo" /> */}</div>
      <div className="compTitle">Recipe Repository</div>
      {isUserLoggedIn ? (
        <div onClick={handleLogout} className="navBtn">
          Logout
        </div>
      ) : (
        <Link to="login-register" className="navBtn">
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
