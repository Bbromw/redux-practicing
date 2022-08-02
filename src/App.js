import "./App.scss";
import { MoviesPage } from "./components/movies";
import Detail from "./components/movie-detail/Detail";
import { Switch, Route, Link } from "react-router-dom";
import DetailsPage from "./components/movie-detail/DetailsPage";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Movies</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <MoviesPage />
        </Route>
        {/* <Route path="/:id">
          <Detail />
        </Route> */}
        <Route path="/:id">
          <DetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
