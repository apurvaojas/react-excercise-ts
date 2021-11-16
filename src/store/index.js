import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = applyMiddleware(thunk, logger);

export default createStore(rootReducer, {}, middlewares);
