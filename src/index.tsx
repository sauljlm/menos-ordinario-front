import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './sass/style.scss';

window.onload = function() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};
