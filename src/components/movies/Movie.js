import React from "react";

export const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} />
      <div className="movie-info">
        <h2>{movie.Title}</h2>
        <div className="movie-detail">
          <h3>Type: {movie.Type}</h3>
          <h3>Year: {movie.Year}</h3>
        </div>
      </div>
    </div>
  );
};
