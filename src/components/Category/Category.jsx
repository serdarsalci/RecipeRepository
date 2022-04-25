import React, { useContext } from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { FaBookmark, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import "./Category.scss";
import { AuthContext } from "../../Context/AuthContext";

const Category = () => {
  const { isUserLoggedIn } = useContext(AuthContext);
  return (
    <div className="category-list container">
      <NavLink to={"/"} className="navLink">
        <FaHome />
        <h4>Home</h4>
      </NavLink>
      <NavLink to={"/cuisine/Italian"} className="navLink">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>

      {isUserLoggedIn && (
        <>
          <NavLink to={"/Favorites"} className="navLink">
            <FaBookmark />
            <h4>Favorites</h4>
          </NavLink>
          <NavLink to={"/add-recipe"} className="navLink">
            <MdAdd />
            <h4>Add</h4>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Category;
