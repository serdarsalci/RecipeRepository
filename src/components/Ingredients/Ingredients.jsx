import React, { useState } from "react";
import "./Ingredients.scss";

const Ingredients = ({ ingredients }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="ingredients">
      <div className="tab-group" onClick={() => setShow(!show)}>
        <span className="bookmark-btn">
          {" "}
          {show ? "Hide Ingredients" : "Show Ingredients"}
        </span>
      </div>
      {show && (
        <ul>
          {ingredients.map((ing) => (
            <li key={ing.id}>{ing.original}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ingredients;
