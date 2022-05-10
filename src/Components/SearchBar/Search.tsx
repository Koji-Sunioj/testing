import React from "react";
import "./Search.css";

//default type of input is text, so not needed define type. otherwise okay

//if you want to filter the list on the home page, you can store the
//data from the input into redux via onchange. this way the home page will re render, but the
//countries list will stay the same, except you are displaying what the search string object
//includes. for example, updateSearch() which could be an action to update -

//example:
/*
1. in this file: 
const filterTable = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearch(event.currentTarget.value))
  }

2. then in the countrylist component: 

const { stringFilter } = useSelector(
    (state: any) => state.stringFilter
  );

const filtered = countries.filter(country=> country.name.includes(stringFilter))

link (line 24 through 29)
https://github.com/Koji-Sunioj/fs10-frontend-public/blob/main/src/components/TableView.tsx
*/

const Search = () => {
  return (
    <>
      <div className="search">
        <input
          className="search__bar"
          placeholder="Search here"
          name="search"
        />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default Search;
