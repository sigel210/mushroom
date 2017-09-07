import React from "react";
import {Link,IndexLink } from "react-router";
var ACTIVE = {
	color:"#f66"
}


class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="container">
				<header className = "header" id="header">
					{this.props.header}
				</header>
				<div id="content">
					{/*this.props.children*/}
					{this.props.content}
				</div>
				<footer className = "footer" id="footer">
					{this.props.footer}
				</footer>
			</div>
		)
	}
}
export default App;