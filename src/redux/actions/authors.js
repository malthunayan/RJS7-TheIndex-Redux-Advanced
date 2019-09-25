import axios from "axios";
import { GET_AUTHORS, FILTER_AUTHORS } from "./actionType";

export const fetchAllAuthors = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors/"
      );
      const authors = response.data;
      dispatch({
        type: GET_AUTHORS,
        payload: authors
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const filterAuthors = query => {
  return {
    type: FILTER_AUTHORS,
    payload: query
  };
};
