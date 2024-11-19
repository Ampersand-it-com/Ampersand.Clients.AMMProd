import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/index.css';
import 'styles/transitions.css';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
