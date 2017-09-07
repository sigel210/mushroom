import React from 'react';
import ReactDOM from 'react-dom';
import {Route,hashHistory,Router,IndexRoute} from 'react-router';

import App from './md/App.js';
import Home from './md/Home.js';
import Kind from './md/Kind.js';
import Cart from './md/Cart.js';
import User from './md/User.js';
import Search from './md/Search.js';
import Login from './md/Login.js';
import Register from './md/Register.js';
import searchpro from './md/searchpro.js';
import Detail from './md/Detail.js';
import './scss/main.scss';

ReactDOM.render((
	<Router history = {hashHistory}>
		<Route	path = "/" component = {App}>
			<IndexRoute components = {{type:Home}} />
			<Route path = '/kind' components = {{type:Kind}} />
			<Route path = '/cart' components = {{type:Cart}} />
			<Route path = '/user' components = {{type:User}} />
			<Route path = '/search' components = {{type:Search}} />
			<Route path = '/searchpro' components = {{type:searchpro}} />
		</Route>
		<Route path = '/login' component = {Login} />
		<Route path = '/register' component = {Register} />
		<Route path = '/detail' component = {Detail} />
	</Router>
),document.getElementById("app"));
