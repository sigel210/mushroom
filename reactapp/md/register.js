import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

import MyAjax from  './MyAjax.js';
import Toast from './Toast.js';

import './../scss/Login.scss';

export default class Login extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			flag : true
		}
	}
	toback(){
		history.go(-1);
	}
	tologin(){
		hashHistory.push('/login');
	}
	render(){
		return(
			<div id = 'container'>
				<div id = 'Loginheader'>
					<b className = 'iconfont' onClick = {this.toback.bind(this)}>&#xe601;</b>
					<div className = 'logintit'>注册</div>
					<div className = 'forgetpwd'></div>
				</div>
				<div id = 'Logincontent'>
						<p className = 'account'>你的手机号是</p>		
						<input className = 'username' type = 'text' placeholder = '输入用户名/邮箱/手机' />
						<p className = 'pwd'>请输入密码</p>
						<input className = 'userpwd' type = 'password' placeholder = '输入用户名/邮箱/手机' />
						<a className = 'btn'>注册</a>
						<div className = 'loginorregisterbox' ><span className = 'nopwd'></span><span className = 'regist' onClick = {this.tologin.bind(this)}>已有账号,直接登录</span></div>
						<div className = 'line'></div>
						<div className = 'tip'>
							
						</div>
						<div className = 'line'></div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		console.log(1111);
		var res =  /^[a-zA-Z0-9_-]{4,16}$/;
		$('.btn').on('tap',function(){
			console.log(111);
			var userID = $(".username").val();
			var password = $(".userpwd").val();
			if($('.username').val() == ''||$('.userpwd').val() == ''){
				$('.tip').css("display",'block');
				$('.tip').html('请输入完整信息')
			}else if(res.test($('.username').val()) == false){
				$('.tip').css("display",'block');
				$('.tip').html('请输入正确用户名');
			}else{
				var userObj= {
						url:"http://datainfo.duapp.com/shopdata/userinfo.php",
						data:{
							status:"register",
							userID:userID,
							password:password
						},
						dataType:"JSON"
					}
						MyAjax.zeptoAjax(userObj,function(data){
							if(data == "0"){
								Toast.makeText('用户名重名',2000)
							}else if(data == "1"){
								Toast.makeText('注册成功',2000);
							}else{
								Toast.makeText('注册失败',2000)
							}
						})
			}
		})
	}
}
