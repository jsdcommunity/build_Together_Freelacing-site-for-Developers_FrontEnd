import darkModeReducer from "./reducers/darkMode";
import { combineReducers, createStore, applyMiddleware } from "redux";
import signUpStepsReducer from "./reducers/signUpSteps";
import promiseMiddleware from "redux-promise";
import jobsReducer from "./reducers/jobs";

const middlewareEnhancer = applyMiddleware(promiseMiddleware);
const allReducers = combineReducers({
   darkMode: darkModeReducer,
   signUpSteps: signUpStepsReducer,
   jobs: jobsReducer,
});

// Creating `store`
const store = createStore(allReducers, middlewareEnhancer);

export default store;
