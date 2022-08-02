import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster} />
      <div className="button-groups">
        <Link to={`/boring/${movie.imdbID}`}>
          <button className="boring-link">To boring page </button>
        </Link>

        <Link to={`/moreboring/${movie.imdbID}`}>
          <button className="more-boring-link">To more boring page </button>
        </Link>
      </div>
    </div>
  );
};
