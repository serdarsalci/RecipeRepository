import React from "react";
import "@splidejs/react-splide/css";
import "./RecipeListItem.scss";

const RecipeListItem = ({ recipe }) => {
  return (
    <>
      <div id="recipeListItem">
        <p>{recipe.title}</p>
        <img src={recipe.image} alt={recipe.title} />
        <div id="gradient"></div>
      </div>
    </>
  );
};

export default RecipeListItem;
