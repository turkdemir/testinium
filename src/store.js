import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import candidateList from "./reducers/candidates.reducer";
//import logger from "redux-logger";

const middleware = [thunk];

const reducer = combineReducers({candidateList});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
