
import React from "react";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class LoginHeader extends React.Component{
	constructor(props){
		super(props);
	}
	back(){
		window.history.go(-1);  //返回上一页
//		window.history.back();  //返回上一页
	}
	render(){
		
		return (
			<div>
				登录头部
				<button onClick={this.back.bind(this)}>返回</button>
			</div>
		)
	}
	
}

export default LoginHeader;