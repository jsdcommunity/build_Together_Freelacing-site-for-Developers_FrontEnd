import darkModeReducer from "./reducers/darkMode";
import { combineReducers, createStore } from "redux";

const allReducers = combineReducers({
  darkMode: darkModeReducer,
});
const store = createStore(allReducers);

export default store;
