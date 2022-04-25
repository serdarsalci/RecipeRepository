import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Searched.scss";

const Searched = () => {
  const [searchedRecipes, setSearhedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const {
      data: { results },
    } = await axios.get(
      `${process.env.REACT_APP_API_URL}/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    console.log(results);
    setSearhedRecipes(results);
    return results;
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div className="searchResults">
      <h3>Search results for {params.search}</h3>
      <div id="searchedListGrid">
        {searchedRecipes.map((item) => {
          return (
            <div key={item.id} id="gridItemCard">
              <Link to={"/recipes/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Searched;
