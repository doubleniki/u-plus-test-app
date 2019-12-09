import { combineReducers } from "redux";
import app from './app'
import historicalRates from './historicalRates.js';
import latestRates from './latestRates.js';

export default combineReducers({
  app,
  historicalRates,
  latestRates
});