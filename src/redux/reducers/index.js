import { combineReducers } from "redux";
import token from "./token";
import stocks from "./stocks";

export default combineReducers({ token, stocks });
