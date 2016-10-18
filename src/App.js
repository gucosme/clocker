import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Header from './components/Header.js';
import Home from './components/Home.js';
import Entrar from './components/Entrar.js'


ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={Entrar} />
            <Route path="/entrar" component={Entrar}/>
        </Route>
    </Router>
, document.getElementById('app'));