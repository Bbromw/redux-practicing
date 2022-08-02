import React, { useEffect, useRef } from "react";
import "./NMovieDetail.scss";
import moviePicture from "../../../images/wallpapersden.com_cowboy-bebop-hd-netflix-poster_2048x1152.jpg";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { movieDetailAction } from "../../../store";
import { useParams } from "react-router-dom";
import sense1 from "../../../images/8dfcf4f7c5864b885e2993a0ef32359adc323c36.jpg";
import sense2 from "../../../images/review-cowboy-bebop-live-action-2_XSNW.webp";

const NMovieDetail = () => {
  const { movie } = useSelector((state) => state.movieDetailReducer);

  const { movies } = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  const moviesElement = useRef(null);

  console.log(movie);

  const nextFilm = () => {
    const movies = moviesElement.current;
    movies.append(movies.children[0]);
  };

  useEffect(() => {
    dispatch(movieDetailAction.getMovieDetailThunk(id));
    return () => {
      dispatch(movieDetailAction.freshMovieDetail());
    };
  }, []);
  return (
    <div className="detail-section">
      <div className="overlay"></div>
      <div className="left-side">
        <div className="heading">
          <h1 className="title">{movie.Title}</h1>
          <div className="extra-heading">
            <div className="item rating">{movie.imdbRating} &#183;</div>
            <div className="item runtime">{movie.Runtime} &#183;</div>
            <div className="item langluage">{movie.Language} &#183;</div>
            <div className="item released">{movie.Released} &#183;</div>
          </div>
        </div>
        <div className="movie-info">
          <div className="moviePicture">
            <img className="picture" src={moviePicture} />
          </div>
          <div className="info">
            <div className="plot">
              <p>{movie.Plot}</p>
            </div>
            <div className="info-container">
              <div className="specific-info">
                Actor<span> &#43;</span>
              </div>
              <div className="info-detail">{movie.Actors}</div>
            </div>

            <div className="info-container">
              <div className="specific-info">
                Awards<span> &#43;</span>
              </div>
              <div className="info-detail">{movie.Awards}</div>
            </div>
            <div className="info-container">
              <div className="specific-info">
                Country<span> &#43;</span>
              </div>
              <div className="info-detail">{movie.Country}</div>
            </div>
            <div className="info-container">
              <div className="specific-info">
                Writer<span> &#43;</span>
              </div>
              <div className="info-detail">{movie.Writer}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="interact">
          <div className="sections watch">
            <div className="sub">Watch</div>
            <i className="icon fa fa-play-circle" aria-hidden="true"></i>
          </div>
          <div className="sections add">
            <div className="sub">Add play list</div>
            <i className="icon fa fa-plus-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div className="other-movies">
          <div className="heading">Senses in film</div>
          <div className="movies" ref={moviesElement}>
            <div className="movie" key={movie.imdbID}>
              <img src={sense1} />
            </div>
            <div className="movie" key={movie.imdbID}>
              <img src={sense2} />
            </div>
          </div>
          <button className="next-button" onClick={nextFilm}>
            Next &#62;
          </button>
        </div>
        <div className="other-movies">
          <div className="heading">Related Movies</div>
          <div className="movies" ref={moviesElement}>
            {movies.map((movie) => (
              <div className="movie" key={movie.imdbID}>
                <img src={movie.Poster} />
              </div>
            ))}
          </div>
          <button className="next-button" onClick={nextFilm}>
            Next &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NMovieDetail;
