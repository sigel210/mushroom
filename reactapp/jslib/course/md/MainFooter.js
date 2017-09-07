
import React from "react";
import ReactDOM from "react-dom";

import {Link,IndexLink} from "react-router";

class MainFooter extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<ul>
				<li  ><IndexLink to="/" activeClassName="active">首页</IndexLink></li>
				<li  ><Link to="/kind" activeClassName="active">分类</Link></li>
				<li  ><Link to="/cart" activeClassName="active">购物车</Link></li>
				<li  ><Link to="/user" activeClassName="active">我的</Link></li>
				<li  ><Link to="/more" activeClassName="active">更多</Link></li>
			</ul>
		)
	}
}

export default MainFooter;