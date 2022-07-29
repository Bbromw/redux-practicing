import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { movieDetailAction } from "../../store";
import { useParams } from "react-router-dom";
import "./Detail.scss";

const Detail = () => {
  const { movie } = useSelector((state) => state.movieDetailReducer);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetailThunk(id));
    return () => {
      dispatch(movieDetailAction.freshMovieDetail());
    };
  }, []);

  return (
    <div className="movie-detail">
      {movie.Title !== undefined ? (
        <>
          <div className="details">
            <div
              className="blur"
              style={{ backgroundImage: `url(${movie.Poster})` }}
            ></div>
            <div className="info">
              <span>Language: {movie.Language}</span>
              <span>Runtime: {movie.Runtime}</span>
              <span>Votes: {movie.imdbVotes}</span>
              <span>Rating: {movie.imdbRating} </span>
            </div>

            <h2>{movie.Title}</h2>

            <p>{movie.Plot}</p>
            <p>
              <strong>Actor: </strong> {movie.Actors}
            </p>
            <p>
              <strong>Director: </strong>
              {movie.Director}
            </p>
            <p>
              <strong>Awards: </strong> {movie.Awards}
            </p>
            <p>
              <strong>Country: </strong> {movie.Country}
            </p>
            <p>
              <strong>BoxOffice: </strong> {movie.BoxOffice}
            </p>
          </div>
          <div className="watch">
            <div className="name">{movie.Title}</div>
            <div className="watch__img">
              <img src={movie.Poster}></img>
            </div>
            <button>Watch</button>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Detail;
