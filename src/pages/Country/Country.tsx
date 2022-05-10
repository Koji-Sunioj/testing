import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Country = () => {
  //you read and grab the data of  the country in the global state countries
  //good to note that if you refresh the page, there won't be any data since
  //useDispatch() of all countries is invoked on the home page.
  //you can do a conditional on countries array, if it's empty: fetch data for that country only

  //https://github.com/Koji-Sunioj/fs10-frontend-public/blob/main/src/pages/ProducPage.tsx

  const { countries }: any = useSelector((state: any) => state.allCountries);
  const { name }: any = useParams();

  const targetData = countries.find((country: any) => country.name === name);

  return <div>{targetData.name}</div>;
};

export default Country;
