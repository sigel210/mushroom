
import React from "react";
import {hashHistory} from "react-router";

export default class User extends React.Component{
	constructor(props){
		super(props)
	}
	
	toLoginFn(){
		hashHistory.push("/login");
	}
	
	toRegisterFn(){
		hashHistory.push("/register");
	}
	
	render(){
		
		return (
			<div className = "type">
				<header id="header">User头部</header>
				<div id="content">
					<button onClick = {this.toLoginFn.bind(this)}>登录</button>
					<button onClick = {this.toRegisterFn.bind(this)}>注册</button>
				</div>
			</div>
		)
	}
}
