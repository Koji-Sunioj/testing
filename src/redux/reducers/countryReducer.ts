import ActionTypes from "../actions/actionTypes";

const initialState = {
  countries: [],
};

export function countryReducer(state = initialState, action: any) {
  switch (action.type) {
  case ActionTypes.GET_ALLCOUNTRIES:
    return { ...state, countries: action.payload };
  default:
    return state;
  }
}
