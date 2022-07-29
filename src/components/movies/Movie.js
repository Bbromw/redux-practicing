import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <Link to={`/${movie.imdbID}`}>
        <img src={movie.Poster} />
      </Link>
    </div>
  );
};
