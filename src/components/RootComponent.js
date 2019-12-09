import React from 'react';
import { Provider } from 'react-redux';

import App from './App/App.js';

function RootComponent(props) {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
}

export default RootComponent;
