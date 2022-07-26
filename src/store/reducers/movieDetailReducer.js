import {} from "../actions/constant";
import { Type } from "../actions";

const iniTalState = {
  movie: {},
  isFetched: false,
  isFetchedSuccess: false,
  isFetchedfail: false,
};
export const movieDetailReducer = (state = iniTalState, action) => {
  switch (action.type) {
    case Type.GET_MOVIE_DETAIL: {
      return {
        ...state,
        movie: action.payload,
        isFetched: true,
      };
    }
    case Type.FRESH_MOVIE_DETAIL: {
      return {
        ...state,
        movie: {},
      };
    }

    // case Type.GET_MOVIES_SUCCESS: {
    //   return {
    //     ...state,
    //     isFetchedSuccess: true,
    //   };
    // }
    // case Type.GET_MOVIES_FAIL: {
    //   return {
    //     ...state,
    //     isFetchedfail: false,
    //   };
    // }
    default:
      return state;
  }
};
