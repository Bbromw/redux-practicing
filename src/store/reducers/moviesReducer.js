import {} from "../actions/constant";
import { typeactions } from "../actions";

const iniTalState = {
  movies: [],
  isFetched: false,
  isFetchedSuccess: false,
  isFetchedfail: false,
};
export const moviesReducer = (state = iniTalState, { type, payload }) => {
  switch (type) {
    case typeactions.GET_MOVIES: {
      return {
        ...state,
        movies: payload,
        isFetched: true,
      };
    }
    case typeactions.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        isFetchedSuccess: true,
      };
    }
    case typeactions.GET_MOVIES_FAIL: {
      return {
        ...state,
        isFetchedfail: false,
      };
    }
    default:
      return state;
  }
};
