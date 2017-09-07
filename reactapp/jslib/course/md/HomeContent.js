
import React from "react";
import {Link,hashHistory} from "react-router";
class HomeContent extends React.Component{
	constructor(props){
		super(props);
	}
	toRegister(){
		hashHistory.push({
			pathname:"/lr/register",
			query:{
				a:1
			}
		})
	}
	toDetail(index){
		hashHistory.push({
			pathname:"/detail",
			query:{
				a:index
			}
		})
	}
	render(){
		return (
			<div>
				首页<br/>
				<Link to="/detail">去详情</Link>
				<br/>
				<Link to="/lr/login">去登录</Link>
				<br/>
				{/*<Link to="/lr/register">去注册</Link>*/}
				<button onClick={this.toRegister.bind(this)}>去注册</button>4
				<ul>
					<li onClick={this.toDetail.bind(this,"0")}>第1个</li>
					<li onClick={this.toDetail.bind(this,"1")}>第2个</li>
					<li onClick={this.toDetail.bind(this,"2")}>第3个</li>
					<li onClick={this.toDetail.bind(this,"3")}>第4个</li>
					<li onClick={this.toDetail.bind(this,"4")}>第5个</li>
					<li onClick={this.toDetail.bind(this,"5")}>第6个</li>
					<li onClick={this.toDetail.bind(this,"6")}>第7个</li>
					<li onClick={this.toDetail.bind(this,"7")}>第8个</li>
					<li onClick={this.toDetail.bind(this,"8")}>第9个</li>
					<li onClick={this.toDetail.bind(this,"9")}>第10个</li>
				</ul>
				
			</div>
		)
	}
}

export default HomeContent;