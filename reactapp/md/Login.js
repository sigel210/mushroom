import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';

import MyAjax from  './MyAjax.js'
import Toast from  './Toast.js' 

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
	toregister(){
		hashHistory.push('/register')
	}
	render(){
		return(
			<div id = 'container'>
				<div id = 'Loginheader'>
					<b className = 'iconfont' onClick = {this.toback.bind(this)}>&#xe601;</b>
					<div className = 'logintit'>登录</div>
					<div className = 'forgetpwd'>忘记密码</div>
				</div>
				<div id = 'Logincontent'>
						<p className = 'account'>蘑菇街账号</p>		
						<input className = 'username' type = 'text' placeholder = '输入用户名/邮箱/手机' />
						<p className = 'pwd'>密码</p>
						<input className = 'userpwd' type = 'password' placeholder = '输入用户名/邮箱/手机' />
						<a className = 'btn'>登录</a>
						<div className = 'loginorregisterbox' ><span className = 'nopwd'>免密登录</span><span className = 'regist' onClick = {this.toregister.bind(this)}>注册账号</span></div>
						<div className = 'line'></div>
						<div className = 'tip'>
							
						</div>
						<div className = 'line'></div>
						<div id = 'qqlogin'></div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		console.log(1111);
		var res =  /^[a-zA-Z0-9_-]{4,16}$/;
		$('.btn').on('tap',function(){
			console.log(111);
			console.log($(".username").val());
			var userID = $(".username").val();
			var password = $(".userpwd").val();
			if($('.username').val() == ''||$('.userpwd').val() == ''){
				Toast.makeText('请输入完整内容',2000)
			}else if(res.test($('.username').val()) == false){
				Toast.makeText('请输入正确用户名',2000)
			}else{
				var url="http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+userID+"&password="+password;
				MyAjax.fetch(url,function(data){
					console.log(userID);
					console.log(password);
					console.log(data);
					if(data == "0"){
						Toast.makeText('用户名不存在',2000)
					}else if(data == "2"){
						Toast.makeText('密码错误',2000)
					}else{
						Toast.makeText('登陆成功',2000)
						localStorage.setItem("isLogin","1");
						localStorage.setItem("userID",userID);
						hashHistory.push('/user');
					}
				},function(err){
					console.log(err)
				})
			}	
		})
	}
}
