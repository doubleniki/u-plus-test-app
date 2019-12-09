import React, {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  HashRouter as Router,
} from "react-router-dom";
// Our components' import
import Routes from '../Routing/Routes.js';

// import actions
import { fetchAvailableCurrencies } from '../../actions/app';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAvailableCurrencies());
    }, 200)
  }, []);
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
