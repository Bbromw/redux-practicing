import { SET_PRODUCT_SUCCESS, SET_PRODUCT_FAIL } from "./constant";

export const setProductSuccess = (payload) => {
  return {
    type: SET_PRODUCT_SUCCESS,
    payload,
  };
};

export const setProductFail = (payload) => {
  return {
    type: SET_PRODUCT_FAIL,
    payload,
  };
};

const baseURL = "https://anime-shop.herokuapp.com/";
export const getProductFromServer = () => {
  return (dispatch) => {
    fetch(baseURL + "products/view-both")
      .then((res) => res.json())
      .then((data) => {
        const products = data.viewProduct.map((product) => product._id);
        dispatch(setProductSuccess(products));
      })
      .catch((error) => dispatch(setProductFail(error.message)));
  };
};
