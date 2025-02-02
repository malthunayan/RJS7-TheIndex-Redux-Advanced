import { GET_AUTHORS, FILTER_AUTHORS } from "../actions/actionType";

const initialState = {
  authors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      return {
        ...state,
        authors: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
