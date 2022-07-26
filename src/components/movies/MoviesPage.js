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
  return (
    <section className="movies-page">
      {movies &&
        movies.map((movie) => {
          return <Movie key={movie.imdbID} movie={movie} />;
        })}
    </section>
  );
};

export default MoviesPage;
