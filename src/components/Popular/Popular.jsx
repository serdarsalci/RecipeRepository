import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import "./Popular.scss";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const {
        data: { recipes },
      } = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      setPopular(recipes);

      localStorage.setItem("popular", JSON.stringify(recipes));
    }
  };

  return (
    <div id="splide-wrapper">
      <h3>Popular Recipes</h3>
      <div className="splide">
        <Splide
          options={{
            rewind: true,
            perPage: 3,
            arrows: false,
            gap: "3rem",
            drag: "free",
            pagination: false,
            type: "loop",
          }}
        >
          {popular.map((item) => (
            <SplideSlide key={item.id}>
              <Link to={"/recipes/" + item.id}>
                <RecipeListItem key={item.id} recipe={item} />
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Popular;
