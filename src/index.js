import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import portfolio from './resources/portfolio';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App portfolio={portfolio} />, document.getElementById('root'));
registerServiceWorker();
