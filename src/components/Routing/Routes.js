import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

// The pages' import
import LatestRates from '../Pages/LatestRates/LatestRates.js';
import HistoricalRates from '../Pages/HistoricalRates/HistoricalRates.js';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HistoricalRates} />
      <Route path="/latest-rates" component={LatestRates} />
    </Switch>
  )
}