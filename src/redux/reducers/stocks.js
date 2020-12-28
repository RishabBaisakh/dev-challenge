import { SET_STOCKS_DATA } from "../actionsTypes";

const initialState = {
  data: null,
};

export default function (state = initialState, action) {
  if (action.type === SET_STOCKS_DATA) {
    const { data } = action.payload;
    return { data };
  } else return state;
}
