import darkModeReducer from "./reducers/darkMode";
import { combineReducers, createStore, applyMiddleware } from "redux";
import signUpStepsReducer from "./reducers/signUpSteps";
import promiseMiddleware from "redux-promise";
import serviceReducer from "./reducers/services";
import testimonialReducer from "./reducers/testimonials";



const middlewareEnhancer = applyMiddleware(promiseMiddleware);
const allReducers = combineReducers({
   darkMode: darkModeReducer,
   signUpSteps: signUpStepsReducer,
   services:serviceReducer,
   testimonials:testimonialReducer
});

// Creating `store`
const store = createStore(allReducers, middlewareEnhancer);

export default store;
