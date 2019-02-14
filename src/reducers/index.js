import { combineReducers } from "redux";
import name from "./name";
import position from "./position";
import age from "./age";
import players from "./players";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  name,
  position,
  age,
  players,
  visibilityFilter
});
