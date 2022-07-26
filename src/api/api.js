import axios from "axios";

const baseURL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}`;
export const getMovies = (title) => {
  return axios.get(`${baseURL}&s=${title}&type=movie`);
};
