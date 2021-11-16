import {
  FETCH_CHARACTERS,
  RECEIVED_CHARACTERS_ERROR,
  RECEIVED_CHARACTERS_SUCCESS
} from "./actionTypes";


import axios from "axios";

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS
});

export const receivedCharactersSuccess = payload => ({
  type: RECEIVED_CHARACTERS_SUCCESS,
  payload
});
export const receivedCharactersError = error => ({
  type: RECEIVED_CHARACTERS_ERROR,
  error
});



export function fetchPosts() {
  return function(dispatch) {
    dispatch(fetchCharacters());
    return axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(
        response => response.data.results,
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        // dispatch(setFilterOptions(getFilterOptions(json)));
        dispatch(receivedCharactersSuccess(json));
      })
      .catch(error => {
        dispatch(receivedCharactersError(error));
      });
  };
}

