import "./App.scss";
import { MoviesPage } from "./components/movies";
import Detail from "./components/movie-detail/Detail";
import { Switch, Route, Link } from "react-router-dom";
import { Footer } from "./components/footer";
import { useRef } from "react";
import DetailsPage from "./components/movie-detail/DetailsPage";

function App() {
  const menuList = useRef(null);

  const clickMenu = () => {
    const list = menuList;
    list.current.style.marginLeft = 0;
  };

  const CloseMenu = () => {
    const list = menuList;
    list.current.style.marginLeft = "-100%";
  };
  return (
    <div className="App">
      <nav className="nav">
        <div className="nav__menu">
          <div className="nav__menu__icon" onClick={clickMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <ul className="nav__menu__list" ref={menuList}>
            <li className="nav__menu__list__close-icon" onClick={CloseMenu}>
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </li>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <div className="buttons buttons-inside">
              <button className="sign-in-button">Sign In</button>
              <button className="premium-button">Go Premium</button>
            </div>
          </ul>
        </div>
        <div className="logo">
          <div className="logo__brand">mozi</div>
          <div className="logo__extra">stream</div>
        </div>
        <div className="buttons">
          <button className="sign-in-button">Sign In</button>
          <button className="premium-button">Go Premium</button>
        </div>
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
      <Footer />
    </div>
  );
}

export default App;
