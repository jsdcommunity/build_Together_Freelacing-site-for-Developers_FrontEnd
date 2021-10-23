import darkModeReducer from "./reducers/darkMode";
import { combineReducers, createStore } from "redux";
import signUpStepsReducer from "./reducers/signUpSteps";

const allReducers = combineReducers({
   darkMode: darkModeReducer,
   signUpSteps: signUpStepsReducer,
});
const store = createStore(allReducers);

export default store;
