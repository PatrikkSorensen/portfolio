import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import FrontPage from './components/containers/front';
import ProjectPage from './components/containers/project_page'; 
import AboutPage from './components/containers/about'; 
import CVPage from './components/containers/cv'; 
import Layout from './components/layout';

import Reducers from './reducers';
import { syncHistoryWithStore } from 'react-router-redux'

import Header from './components/header'; 

const preloadedState = window.__PRELOADED_STATE__
console.log("preloaded: ", preloadedState); 
const store = createStore(Reducers, preloadedState); 

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
    	  	<Route path="/" component={Layout}>
                <IndexRoute component={FrontPage} />
        	  	<Route path="projects" component={ProjectPage} >
                    <Route path=":id" />
                </Route>
        	  	<Route path="about" component={AboutPage} />
                <Route path="cv" component={CVPage} />
                <Route path="*" component={FrontPage} />
            </Route>
        </Router>
        </Provider>
    , document.querySelector('.content')
);
