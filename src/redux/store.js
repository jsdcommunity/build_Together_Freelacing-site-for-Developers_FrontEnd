import darkModeReducer from "./reducers/darkMode";
import { combineReducers, createStore, applyMiddleware } from "redux";
import signUpStepsReducer from "./reducers/signUpSteps";
import promiseMiddleware from "redux-promise";
import serviceReducer from "./reducers/services";
import testimonialReducer from "./reducers/testimonials";
import jobsReducer from "./reducers/jobs";
import proposalData from "./reducers/proposalData";

const middlewareEnhancer = applyMiddleware(promiseMiddleware);
const allReducers = combineReducers({
   darkMode: darkModeReducer,
   signUpSteps: signUpStepsReducer,
   services: serviceReducer,
   testimonials: testimonialReducer,
   jobs: jobsReducer,
   proposalData,
});

// Creating `store`
const store = createStore(allReducers, middlewareEnhancer);

export default store;
