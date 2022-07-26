import {} from "../actions/constant";
import { Type } from "../actions";

const iniTalState = {
  movies: [],
  isFetched: false,
  isFetchedSuccess: false,
  isFetchedfail: false,
};
export const moviesReducer = (state = iniTalState, action) => {
  switch (action.type) {
    case Type.GET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
        isFetched: true,
      };
    }
    case Type.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        isFetchedSuccess: true,
      };
    }
    case Type.GET_MOVIES_FAIL: {
      return {
        ...state,
        isFetchedfail: false,
      };
    }
    default:
      return state;
  }
};
