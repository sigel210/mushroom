import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,IndexLink,hashHistory} from 'react-router';

import MyAjax from './MyAjax.js';


export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			footerlist:[]
		}
	}
	tocart(){
		hashHistory.push('/cart');
	}
	componentWillMount(){
		
		var that = this;
		var obj = {
			url:'http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=?',
			dataType:'JSONP',
			data:""
		}
		MyAjax.zeptoAjax(obj,function(data){
			console.log(data.data[4604].list)
			that.setState({
				footerlist:data.data[4604].list
			})
		})
	}
	render(){
		var that = this;
		var data = that.state.footerlist;
		var arr = [];
		for(var i=0;i<data.length;i++){
			if(i == 0){
				arr.push(<li key = {i}  className = 'footerlist'>
					<IndexLink to = '/'>
						<img className ="footerimg" src = {data[i].image}/>
						<p className = 'active'>{data[i].title}</p>
					</IndexLink>
				</li>)
			}else{
				arr.push(
					<li key = {i}  className = 'footerlist'>
						<Link >
							<img className ="footerimg" src = {data[i].image}/>
							<p>{data[i].title}</p>
						</Link>
					</li>
				)
			}
		}
		return(
			<div id = "container">
				<div id='header'>
					<a id = 'login' href = '/#/login'>
						<img src = './../img/tit.png' />
					</a>
					<form id = 'jiaserchBox'>
						<b className = 'iconfont'>&#xe66f;</b>
						<Link id="jiasearch" to = '/search'>
							<div >露趾一字凉拖鞋</div>
						</Link>
					</form>
					<b className = 'iconfont Buycart' onClick = {this.tocart.bind(this)}>&#xe600;</b>
				</div>
				{this.props.type}
				<div className = 'bu'>
				</div>
				 <footer id="footer">
			       <ul id ='footerUl'>
			          <li className="footerlist">
			               <IndexLink to = "/" className="active">
			                   <b className="iconfont">&#xe60c;</b>
				               首页
			               </IndexLink>
			           </li>
			           <li className="footerlist">
			               <Link to = "/kind">
			               		<b className="iconfont" >&#xe604;</b>
			               		分类
			               	</Link>
			           </li>
			           <li className="footerlist">
			               <Link to = "/cart">
				               <b className="iconfont">&#xe600;</b>
				               购物车
			               </Link>
			           </li>
			           <li className="footerlist">
			               <Link to = "/user">
				               <b className="iconfont">&#xe60d;</b>
				               我的
			               </Link>
			           </li>
			       </ul>
			   </footer>
			</div>
		)
	}
	componentDidUpdate(){
		var that = this;
		var data = that.state.footerlist;
		console.log(data);
		$('.footerlist').eq(0).find('img').attr('src',data[0].selected);
		$('.footerlist').eq(1).find('a').attr('href','reactapp/index.html?__hbt=1502672967860#/kind');
		$('.footerlist').eq(2).find('a').attr('href','/#/cart');
		if(localStorage.getItem('userID')){
			$('.footerlist').eq(3).find('a').attr('href','/#/user');
		}else{
			$('.footerlist').eq(3).find('a').attr('href','/#/login');
		}
		$('.footerlist').on('tap',function(){
			var index = $(this).index();
			console.log(index);
			$(this).find('a').addClass('active').parents('.footerlist').siblings().find('a').removeClass('active');
		})
	}
}
