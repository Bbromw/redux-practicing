import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { movieDetailAction } from "../../store";
import { useParams } from "react-router-dom";
import "./Detail.scss";

const Detail = () => {
  const { movie } = useSelector((state) => state.movieDetailReducer);
  const dispatch = useDispatch();
  console.log(movie);
  const { id } = useParams();

  const renderRatings = () => {
    return movie.Ratings.map((rating, index) => {
      return (
        <div key={index} className="source">
          <h3>Source: {rating.Source}</h3>
          <h4>Value: {rating.Value}</h4>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetailThunk(id));
    return () => {
      dispatch(movieDetailAction.freshMovieDetail());
    };
  }, []);
  return (
    <div className="movie-detail">
      <div className="poster">
        <img src={movie.Poster}></img>
      </div>
      <div className="details">
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
        <div className="info">
          <span>Language: {movie.Language}</span>
          <span>Runtime: {movie.Runtime}</span>
          <span>Votes: {movie.imdbVotes}</span>
          <span>Rating: {movie.imdbRating} </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
