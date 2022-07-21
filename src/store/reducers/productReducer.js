import { SET_PRODUCT_SUCCESS, SET_PRODUCT_FAIL } from "../actions/constant";

const iniTalState = {
  product: [],
  error: "",
};
export const productReducer = (state = iniTalState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: payload,
      };
    }
    case SET_PRODUCT_FAIL: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
};
