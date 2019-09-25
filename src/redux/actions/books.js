import axios from "axios";
import { GET_BOOKS } from "./actionType";

export const fetchAllBooks = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://the-index-api.herokuapp.com/api/books/"
      );
      const books = response.data;
      dispatch({
        type: GET_BOOKS,
        payload: books
      });
    } catch (err) {
      console.error(err);
    }
  };
};
