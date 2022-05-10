import axios from "axios";
import { Dispatch } from "redux";
import ActionTypes from "./actionTypes";

export const getAllCountries = (countries: []) => {
  return {
    Type: ActionTypes.GET_ALLCOUNTRIES,
    payload: countries,
  };
};

export const getSingleCountry = (country: []) => {
  return {
    Type: ActionTypes.GET_SINGLECOUNTRY,
    payload: country,
  };
};

export const removeSingleCountry = (country: []) => {
  return {
    Type: ActionTypes.REMOVE_SINGLECOUNTRY,
    payload: country,
  };
};

export const getCountries = () => async (dispatch: Dispatch) => {
  const response = await axios.get("https://restcountries.com/v2/all");
  dispatch({ type: ActionTypes.GET_ALLCOUNTRIES, payload: response.data });
};
