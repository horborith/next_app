import { combineReducers } from "redux";
import playerSlice from "./playerSlice";
import productSlice from "./productSlice";

export default combineReducers({
  player: playerSlice,
  product: productSlice,
});
