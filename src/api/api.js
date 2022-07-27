import axios from "axios";

const baseURL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}`;
export const getMovies = (title) => {
  return axios.get(`${baseURL}&s=${title}&type=movie`);
};

export const getMovieDetail = (movieId) => {
  return axios.get(`https://www.omdbapi.com/?apikey=54e0bf78&i=${movieId}`);
};
