
import React from "react";

export default class Login extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		
		return (
			<div id = "container">
				<div className = "type">
					<header id="header">login头部</header>
					<div id="content">
						login页面
					</div>
				</div>
			</div>
		)
	}
}
