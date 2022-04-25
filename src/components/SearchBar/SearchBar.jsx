import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";

const Search = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
    navigate("/searched/" + input);
  };
  return (
    <form onSubmit={submitHandler} className="searchForm">
      <div>
        <FaSearch></FaSearch>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="search.."
        />
      </div>
    </form>
  );
};

export default Search;
