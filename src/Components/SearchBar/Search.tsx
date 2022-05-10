import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <>
      <div className="search">
        <input
          className="search__bar"
          type="text"
          placeholder="Search here"
          name="search"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default Search;
