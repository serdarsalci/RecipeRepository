import React, { useEffect } from "react";

import Popular from "../components/Popular/Popular";
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {
  useEffect(() => {
    document.title = "Recipe Repository";
  });
  return (
    <>
      <SearchBar />
      <Popular />
    </>
  );
};

export default Home;
