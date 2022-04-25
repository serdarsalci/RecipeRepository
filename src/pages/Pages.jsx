import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Cuisine from "../components/Cuisine/Cuisine";
import Searched from "../components/Searched/Searched";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import LoginRegister from "../components/Login/LoginRegister";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import Favorites from "../components/Favorites/Favorites";

const Pages = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default Pages;
