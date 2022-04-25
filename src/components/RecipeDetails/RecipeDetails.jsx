import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.scss";
import { BsClock } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import Ingredients from "../Ingredients/Ingredients";
import { AiOutlineCheck } from "react-icons/ai";
import { AuthContext } from "../../Context/AuthContext";

const RecipeDetails = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  const { addToUserFavorites } = useContext(AuthContext);
  const getRecipeDetails = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    setDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  const handleFavoriteBtn = async () => {
    try {
      addToUserFavorites(details.id);
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <div>Loading</div>
  ) : (
    <div className="recipeDetailsPage">
      <div className="img-info-wrapper  ">
        <div className="image-wrapper ">
          <img src={details.image} alt={details.title} />
          <hr />

          <Ingredients ingredients={details.extendedIngredients} />
        </div>
        <div className="recipe-info ">
          <h2>{details.title}</h2>

          <div>
            {details.glutenFree && (
              <span className="attributes">
                Gluen Free <AiOutlineCheck />
              </span>
            )}
            {details.veryHealthy && (
              <span className="attributes">
                Very Healthy <AiOutlineCheck />
              </span>
            )}
            {details.dairyFree && (
              <span className="attributes">
                Dairy Free <AiOutlineCheck />
              </span>
            )}
          </div>
          <div className="prep-time">
            <BsClock /> <span>Prep: {details.readyInMinutes} min.</span>
          </div>
          <div className="tab-group">
            <span className="bookmark-btn" onClick={handleFavoriteBtn}>
              <BsBookmark /> Add to Favorites
            </span>
          </div>

          <div className="">
            <div className=" " id="recipe-summary">
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              {/* <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3> */}
            </div>
          </div>
          {/* <Ingredients ingredients={details.extendedIngredients} /> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
