import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions/countryAction";

const CountryList = () => {
  const countries = useSelector((state: any) => state.allCountries.countries);
  console.log(countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  return (
    <div>
      {countries.length > 0 &&
        countries.map((country: any) => {
          return (
            <div>
              {country.name}, {country.flag}, {country.region},{" "}
              {country.population}, {country.languages[0].name}
            </div>
          );
        })}
    </div>
  );
};

export default CountryList;
