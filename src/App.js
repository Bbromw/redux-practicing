import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { actions } from "./store/actions";
import { store } from "./store/store";
import { productReducer } from "./store/store";

function App() {
  const productState = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getProductFromServer());
  }, []);
  return (
    <>
      <h1>App</h1>
      {console.log(productState)}
    </>
  );
}

export default App;
