
import React from "react";
import {Link,IndexLink} from "react-router";

export default class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		
		return (
			<div id="container">
				<div className = "type">
					<header id="header">detail头部</header>
					<div id="content">{this.props.children}</div>
				</div>
				<footer id="footer">
					<ul>
						<li>
							<IndexLink to = "/detail" activeClassName="active">实拍</IndexLink>
						</li>
						<li>
							<Link to = "/detail/detail2" activeClassName="active">评价</Link>
						</li>
						<li>
							<Link to = "/detail/detail3" activeClassName="active">详情</Link>
						</li>
					</ul>
				</footer>
			</div>
		)
	}
}
