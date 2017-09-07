
import React from "react";

export default class Cart extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		
		return (
			<div className = "type">
				<header id="header">Cart头部</header>
				<div id="content">Cart内容区域</div>
			</div>
		)
	}
}
