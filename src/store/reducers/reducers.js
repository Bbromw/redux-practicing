import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { movieDetailReducer } from "./movieDetailReducer";

export const reducers = combineReducers({
  moviesReducer,
  movieDetailReducer,
});
