import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import configureStore from './configureStore';
import RootComponent from './components/RootComponent';

const store = configureStore();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <RootComponent store={store} />,
  rootElement
);

serviceWorker.unregister();
