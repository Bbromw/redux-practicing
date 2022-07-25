import React from "react";

export const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} />
      <h2>{movie.Title}</h2>
      <h3>Type: {movie.Type}</h3>
      <h3>Year: {movie.Year}</h3>
    </div>
  );
};
