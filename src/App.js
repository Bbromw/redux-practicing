import "./App.scss";
import { MoviesPage } from "./components/movies";
import { Switch, Route, Link } from "react-router-dom";
import { Footer } from "./components/footer";
import { useRef } from "react";
import DetailsPage from "./components/movie-detail/DetailsPage";
import NMovieDetail from "./components/movie-detail/N_movie_detail/NMovieDetail";
import NewDetail from "./components/new-detail/NewDetail";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="logo">
          <div className="logo__brand">MOZI</div>
        </div>
        <div className="buttons">
          <ul className="buttons buttons-inside">
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Help Center</Link>
            </li>
          </ul>
          <button className="sign-in-btn">Sign In</button>
          <button className="premium-btn">Go Premium</button>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <MoviesPage />
        </Route>
        <Route path="/boring/:id">
          <NewDetail />
        </Route>
        <Route path="/moreboring/:id">
          <DetailsPage />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
