import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} />
      <div className="movie-info">
        <h2>{movie.Title}</h2>

        <div className="movie-extra">
          <h3>Type: {movie.Type}</h3>
          <h3>Year: {movie.Year}</h3>
          <Link to={`/${movie.imdbID}`} className="detail-button">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};
