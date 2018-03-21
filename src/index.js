import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router-3';

import App from './Components/App';
import Landing from './Containers/Landing';
import Learn from './Containers/Learn';
import Share from './Containers/Share';

import store from './store';


ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <Route path="/" component={ App }>
                <IndexRoute component={ Landing } />
                <Route path="learn" component={ Learn } />
                <Route path="share" component={ Share } />
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));

