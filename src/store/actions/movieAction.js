import { Type } from "./constant";
import { apis } from "../../api";

export const getMovies = (payload) => {
  return {
    type: Type.GET_MOVIES,
    payload,
  };
};

export const getMoviesFail = () => {
  return {
    type: Type.GET_MOVIES_FAIL,
  };
};

export const getMoviesSuccess = () => {
  return {
    type: Type.GET_MOVIES_SUCCESS,
  };
};

export const getMoviesThunk = () => {
  return async (dispatch) => {
    const movies = ["hello", "friends"];
    const getData = async (title) => {
      const { data } = await apis.getMovies(title);
      return data.Search;
    };
    const getAll = async () => {
      let allMovies = [];
      for (let i = 0; i < movies.length; i++) {
        const response = await getData(movies[i]);
        allMovies = allMovies.concat(response);
      }
      return allMovies;
    };
    try {
      const data = await getAll();
      dispatch(getMovies(data));
      dispatch(getMoviesSuccess());
    } catch {
      dispatch(getMoviesFail());
    }
  };
};
