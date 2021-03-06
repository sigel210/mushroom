
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute} from "react-router";

import "./scss/main.scss";

import App from "./md/App.js";
//import Detail from "./md/Detail.js";
import NewDetail from "./md/NewDetail.js";
import Login from "./md/Login.js";
import Register from "./md/Register.js";

import Home from "./md/Home.js";
import Kind from "./md/Kind.js";
import Cart from "./md/Cart.js";
import User from "./md/User.js";
import More from "./md/More.js";

import Detail1 from "./md/Detail1.js";
import Detail2 from "./md/Detail2.js";
import Detail3 from "./md/Detail3.js";

//			<Route path = "home" components = {{type:Home}}/>
//			<Route path = "detail1" component = {Detail1}/>
//<Route	path = "/detail" component = {Detail}>
//			<IndexRoute component = {Detail1} />
//			<Route path = "detail2" component = {Detail2}/>
//			<Route path = "detail3" component = {Detail3}/>
//		</Route>
ReactDOM.render((
	<Router history = {hashHistory}>
		<Route	path = "/" component = {App}>
			<IndexRoute components = {{type:Home}} />
			<Route path = "kind" components = {{type:Kind}}/>
			<Route path = "cart" components = {{type:Cart}}/>
			<Route path = "user" components = {{type:User}}/>
			<Route path = "more" components = {{type:More}}/>
		</Route>
		<Route	path = "/detail" component = {NewDetail}></Route>
		<Route	path = "/login" component = {Login}></Route>
		<Route	path = "/register" component = {Register}></Route>
	</Router>
),document.getElementById("app"));

