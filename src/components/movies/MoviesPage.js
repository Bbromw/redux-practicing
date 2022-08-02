import React, { useEffect } from "react";
import { Movie } from "./Movie";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { movieAction } from "../../store";
import "./moviePage.scss";

const MoviesPage = () => {
  const { movies } = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction.getMoviesThunk());
  }, []);

  useEffect(() => {}, []);
  return (
    <section className="movies-page">
      <h2 className="title">
        The best movies <a>View more</a>
      </h2>
      <div className="movies">
        {movies &&
          movies.map((movie) => {
            return <Movie key={movie.imdbID} movie={movie} />;
          })}
      </div>
    </section>
  );
};

export default MoviesPage;
