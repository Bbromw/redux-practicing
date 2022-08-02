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
          <div className="watch">
            <div className="movie">
              <div className="main">
                <h2>{movie.Title}</h2>
                <span>{movie.Runtime} &#183;</span>
                <span>{movie.Language}</span>
              </div>
              <div className="info">
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {movie.imdbVotes}
                </span>
                <span>
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                  {movie.imdbRating}{" "}
                </span>
              </div>
            </div>
            <div className="see_poster">
              <div className="watch__img">
                <img src={movie.Poster}></img>
              </div>
              <div className="button">
                <button>Watch</button>
                <button>Trailer</button>
                <button className="watch-list">
                  <i className="fa fa-plus" aria-hidden="true"></i>Add to watch
                  list
                </button>
              </div>
            </div>
          </div>
          <div className="details">
            <p>{movie.Plot}</p>
            <p>
              <strong>Actor: </strong> <span>{movie.Actors}</span>
            </p>
            <p>
              <strong>Director: </strong>
              {movie.Director}
            </p>
            <p>
              <strong>Awards: </strong> <span> {movie.Awards}</span>
            </p>
            <p>
              <strong>Country: </strong> <span> {movie.Country}</span>
            </p>
            <p>
              <strong>BoxOffice: </strong> <span> {movie.BoxOffice}</span>
            </p>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Detail;
