import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {loaderHandler} from './actions';

const middlewares = applyMiddleware(thunk, logger, loaderHandler);

export default createStore(rootReducer, {}, middlewares);
