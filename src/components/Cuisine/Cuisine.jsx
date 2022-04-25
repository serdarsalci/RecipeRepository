import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Cuisine.scss";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const { type } = useParams();

  const getCuisine = async () => {
    var local = localStorage.getItem(type);

    if (local) {
      setCuisine(JSON.parse(local));
    } else {
      var res = await getCuisineFromApi(type);

      localStorage.setItem(type, JSON.stringify(res));
    }
  };

  const getCuisineFromApi = async (name) => {
    const {
      data: { results },
    } = await axios.get(
      `${process.env.REACT_APP_API_URL}/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    console.log(results);
    setCuisine(results);
    return results;
  };

  useEffect(() => {
    getCuisineFromApi(type);
  }, [type]);

  return (
    <div className="grid">
      {cuisine.map((item) => {
        return (
          <div key={item.id} className="gridItemCard">
            <Link to={`/recipes/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Cuisine;
