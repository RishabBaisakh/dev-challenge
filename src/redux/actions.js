import * as actionTypes from "./actionsTypes";

export const setToken = (token) => ({
  type: actionTypes.SET_TOKEN,
  payload: {
    token,
  },
});

export const setStocksData = (data) => {
  return {
    type: actionTypes.SET_STOCKS_DATA,
    payload: {
      data,
    },
  };
};
