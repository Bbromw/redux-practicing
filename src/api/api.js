import axios from "axios";

const baseURL = "http://www.omdbapi.com/?&apikey=54e0bf78";
export const getMovies = (title) => {
  return axios.get(`${baseURL}&s=${title}&type=movie`);
};
