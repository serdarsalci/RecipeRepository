import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

const Favorites = () => {
  const [favIds, setFavIds] = useState([]);

  const { getUserFavorites } = useContext(AuthContext);

  const getRecipeDetails = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );

    return data;
  };

  const getFavs = async () => {
    var res = await getUserFavorites();
    setFavIds(res);
  };

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <div className="">
      {favIds.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default Favorites;
