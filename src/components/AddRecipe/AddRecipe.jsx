import React from "react";
import Ingredients from "../Ingredients/Ingredients";
import "./AddRecipe.scss";

const AddRecipe = () => {
  return (
    <form className="newRecipePage">
      <div className="recipeDetailsPage">
        <div className="grid-container">
          <div className="image-container"></div>
          <div className="recipe-title">
            <h3>Recipe Title</h3>
            <input type="text" className="title-input" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddRecipe;
