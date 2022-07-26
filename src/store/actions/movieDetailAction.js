import { Type } from "./constant";
import { apis } from "../../api";

export const getMovieDetail = (payload) => {
  return {
    type: Type.GET_MOVIE_DETAIL,
    payload,
  };
};

export const freshMovieDetail = () => {
  return {
    type: Type.FRESH_MOVIE_DETAIL,
  };
};

export const getMovieDetailThunk = (movieId) => {
  return async (dispatch) => {
    try {
      const response = await apis.getMovieDetail(movieId);
      dispatch(getMovieDetail(response.data));
    } catch {
      console.log("error");
    }
  };
};
