import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/countryAction";
import "./CountryList.css";
const CountryList = () => {
  //when you initialize useSelector, the component listens for any changes
  //in the state (dynamically) and will re render depending on the values you ask for
  //this way you can listen to changes to loading, error, and countries array
  //check out https://github.com/Pratistha13/fs10-frontend-project/blob/main/src/redux/actions/CountryAction.ts
  //also might be good to seperate getting all countries and one country to different action and reducer files

  const { countries, error, loading } = useSelector(
    (state: any) => state.allCountries
  );
  const dispatch = useDispatch();

  if (countries.length === 0) {
    dispatch(getCountries());
    console.log("rendered", error, loading);
  }

  /*useEffect(() => {
    dispatch(getCountries());
    console.log('rendered')
  }, [dispatch]);*/
  return (
    <div className="country-list">
      {countries.length > 0 &&
        countries.map((country: any) => {
          return (
            <div key={country.numericCode} className="card">
              <Link to={"/Country/" + country.name}>{country.name}</Link>
              <img src={country.flag} alt={country.name}></img>
              <p>{country.region}</p>
              <p>{country.population}</p>
              <p>{country.languages[0].name}</p>
            </div>
          );
        })}
      {error && <p>oh no</p>}
    </div>
  );
};

export default CountryList;
