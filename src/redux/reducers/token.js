import { SET_TOKEN } from "../actionsTypes";

const initialState = {
  token: null,
};

export default function (state = initialState, action) {
  if (action.type === SET_TOKEN) {
    const { token } = action.payload;
    return { token };
  } else return state;
}
