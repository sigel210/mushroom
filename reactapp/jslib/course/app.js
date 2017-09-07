import React from "react";
import ReactDOM from "react-dom";
import {Route,Router,Link,hashHistory,IndexRoute} from "react-router";

import "./scss/main.scss";

import MainFooter from "./md/MainFooter.js";
import HomeContent from "./md/HomeContent.js";
import KindContent from "./md/KindContent.js";
import CartContent from "./md/CartContent.js";
import UserContent from "./md/UserContent.js";
import MoreContent from "./md/MoreContent.js";
import HomeHeader from "./md/HomeHeader.js";
import KindHeader from "./md/KindHeader.js";
import CartHeader from "./md/CartHeader.js";
import UserHeader from "./md/UserHeader.js";
import MoreHeader from "./md/MoreHeader.js";

import DetailContent from "./md/DetailContent.js";
import DetailHeader from "./md/DetailHeader.js";
import DetailFooter from "./md/DetailFooter.js";

import App from "./md/App.js";
import Lr from "./md/Lr.js";


import LoginHeader from "./md/LoginHeader.js";
import LoginContent from "./md/LoginContent.js";

import RegisterContent from "./md/RegisterContent.js";
import RegisterHeader from "./md/RegisterHeader.js";

ReactDOM.render((<Router history = {hashHistory}>
					<Route path="/" component={App}>
						<IndexRoute components={{content:HomeContent,header:HomeHeader,footer:MainFooter}}/>
						<Route path="kind" components={{content:KindContent,header:KindHeader,footer:MainFooter}} />
						<Route path="cart" components={{content:CartContent,header:CartHeader,footer:MainFooter}} />
						<Route path="user" components={{content:UserContent,header:UserHeader,footer:MainFooter}} />
						<Route path="more" components={{content:MoreContent,header:MoreHeader,footer:MainFooter}} />
						<Route path="detail" components={{content:DetailContent,header:DetailHeader,footer:DetailFooter}} />
					</Route>
					<Route path="/lr" component={Lr}>
						<Route path="login" components={{content:LoginContent,header:LoginHeader}} />
						<Route path="register" components={{content:RegisterContent,header:RegisterHeader}} />
					</Route>
				</Router>),document.getElementById("app"));

//ReactDOM.render(<MainFooter />,document.getElementById("footer"));