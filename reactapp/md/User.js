import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'


import './../scss/user.scss';

export default class User extends React.Component{
	constructor(props){
		super(props)
	}
	tohomeFn(){
		localStorage.removeItem('userID');
		hashHistory.push('/')
	}
	
	componentDidMount(){
		$('#header').css("display","none");
		console.log(localStorage.getItem('userID'))
		$('.usernamemsg  .username').html(localStorage.getItem('userID'))
	}
	render(){
		return(
				<div id = 'container'>
					<div id = 'userheader'>
						<div className = 'userheadertop'>
							<b className = 'iconfont setitems'>&#xe618;</b>
							<b className = 'iconfont'>&#xe647;</b>
						</div>
						<div className = 'usermsg'>
							<div className = 'touxiang'>
								<img src = './../img/touxiang.jpg' />
							</div>
							<div className = 'usernamemsg'>
								<p className = 'username'></p>
								<p className = 'address'>我的收货地址<b className = 'iconfont'>&#xe610;</b> </p>
							</div>
							<b className = 'iconfont'>&#xe610;</b>
						</div>
						<div className = 'sleffocus'>
							<div className = 'sleffocusitem'>
								<p><b className = 'iconfont'>&#xe621;</b>关注</p>
							</div>
							<div className = 'sleffocusitem'>
								<p><b className = 'iconfont'>&#xe60f;</b>收藏</p>
							</div>
							<div className = 'sleffocusitem'>
								<p><b className = 'iconfont'>&#xe603;</b>足迹</p>
							</div>
						</div>
					</div>
					<div id = 'usercontent'>
						<ul className = 'top'>
							<li className = 'usermsg topli'><b className = 'iconfont'>&#xe604;</b>我的订单<b className = 'iconfont right'>&#xe610;</b></li>
							<ul className = 'afterbuy'>
								<li><b className = 'iconfont'>&#xe63f;</b>待收款</li>
								<li><b className = 'iconfont'>&#xe739;</b>待发货</li>
								<li><b className = 'iconfont'>&#xe606;</b>待收货</li>
								<li><b className = 'iconfont'>&#xe654;</b>待评价</li>
								<li><b className = 'iconfont'>&#xe605;</b>售后</li>
							</ul>
						</ul>
						<ul className = 'bottom'>
							<li className = 'usermsg'>
								<b className = 'iconfont'>&#xe63c;</b>我的购物车<b className = 'iconfont right'>&#xe610;</b>
							</li>
							<li className = 'usermsg'>
								<b className = 'iconfont'>&#xe628;</b>我的拼团<b className = 'iconfont right'>&#xe610;</b>
							</li>
							<li className = 'usermsg'>
								<b className = 'iconfont'>&#xe63f;</b>我的钱包<b className = 'iconfont right'>&#xe610;</b>
							</li>
							<li className = 'usermsg'>
								<b className = 'iconfont'>&#xe623;</b>我的优惠券<b className = 'iconfont right'>&#xe610;</b>
							</li>
							<li className = 'usermsg'>
								<b className = 'iconfont'>&#xe60f;</b>我收藏的商品<b className = 'iconfont right'>&#xe610;</b>
							</li>
							<li className = 'usermsg'>
								<b className = 'iconfont'>&#xe74b;</b>我收藏的店铺<b className = 'iconfont right'>&#xe610;</b>
							</li>
							<li className = 'usermsg'>
								<b className = 'iconfont'>&#xe662;</b>消息通知<b className = 'iconfont right'>&#xe610;</b>
							</li>
							<li className = 'usermsg'>
								<b className = 'iconfont'>&#xe658;</b>客服<b className = 'iconfont right'>&#xe610;</b>
							</li>
						</ul>
						<button className = 'tuichu' onClick = {this.tohomeFn.bind(this)}>退出登录</button>
					</div>
				</div>
			)
	}
}