import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


// You can choose your kind of history here (e.g. browserHistory)
// Your routes.js file
import routes from './routes';

ReactDOM.render(
    <Router routes={routes} />,
    document.getElementById('root'),
    registerServiceWorker()
);

/* ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
