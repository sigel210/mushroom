import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import MyAjax from './MyAjax.js';

import './../scss/kind.scss';

export default class Kind extends React.Component{
	constructor(props){
		super(props),
		this.state = {
			kindprolisttit : [],
			kindprolist : [],
			kindprolistmark : [],
			kindprolistmoretit : [],
			kindprolistmore : [],
			flag : false
		}
	}
	componentWillMount(){
		var that = this;
		var url  = "http://mce.mogucdn.com/jsonp/multiget/3?pids=41789%2C4604&callback=?"
		var obj = {
			dataType : 'JSONP',
			url : url
		}
		MyAjax.zeptoAjax(obj,function(data){
			that.setState({
				kindprolisttit : data.data[41789].list
			})
		})
		
		
		var url0  = "http://mce.mogujie.com/jsonp/makeup/3?pid=41888&_=1502094901881&callback=?"
		var obj0 = {
			dataType : 'JSONP',
			url : url0
		}
		MyAjax.zeptoAjax(obj0,function(data){
			that.setState({
				kindprolist : data.data.categoryNavigation.list,
			})
		})
		
		var url1 = 'https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&_=1502115542062&callback=?'
		var obj1 = {
			data:'',
			url:url1,
			dataType:'JSONP'
		}
		MyAjax.zeptoAjax(obj1,function(data){
			that.setState({
				kindprolistmoretit : data.result.sortFilter,
				kindprolistmore : data.result.wall.docs
			})
		})
	}
	componentDidMount(){
		var that  = this;
		$('#header').css({display:"flex",position:'fixed'});
		$('#footer').css({display:"flex",position:'fixed'});
	}
	render(){
		var that = this;
		var kindprotitdata = that.state.kindprolisttit;
		var kindprotitarr = [];
		for(var i in kindprotitdata){
			kindprotitarr.push(
				<li value = {kindprotitdata[i].miniWallkey} id= {kindprotitdata[i].maitKey} key = {i} className = 'prolist'>
					<p className = 'proname'>
						{kindprotitdata[i].title}
					</p>
				</li>	
			)
		} 
		
		var kindprodata = that.state.kindprolist;
		var kindproarr = [];
		for(var j in kindprodata){
			kindproarr.push(
				<a key = {j} href = {kindprodata[j].link} className = 'kindproLink'>
					<img src = {kindprodata[j].image} />
					<p className = 'kindpro'>
						{kindprodata[j].title}
					</p>
				</a>
			)
		} 
		
		
		var kindprolistmoretitdata = that.state.kindprolistmoretit;
		var kindprolistmoretitarr = []
		for(var k in kindprolistmoretitdata){
			kindprolistmoretitarr.push(
				<h4 id = {kindprolistmoretitdata[k].sortKey} key = {k} className = 'kindprolistmoretitname'>{kindprolistmoretitdata[k].title}</h4>
			)
		}
		
		var kindprolistmoredata = that.state.kindprolistmore;
		var kindprolistmorearr = [];
		for(var n in kindprolistmoredata){
			kindprolistmorearr.push(
				<a key ={n} href = {kindprolistmoredata[n].link}>
					<div className = 'kindprolistmore'>
						<img className = 'kindprolistmoreimg' src = {kindprolistmoredata[n].img} />
						<p className = 'kindprolistmoresale'>已售{kindprolistmoredata[n].sale}件</p>
					</div>
					<div className = 'kindpromoredescribe'>
						<p className = 'kindpromorename'>{kindprolistmoredata[n].title}</p>
						<div className = 'kindpromorepriceandstart'>
							<div className = 'kindpromoreprice'>￥{kindprolistmoredata[n].price}</div>
							<div className = 'kindpromorestart'>
								{kindprolistmoredata[n].cfav}
								<b className = 'iconfont'>&#xe602;</b>
							</div>
						</div>
					</div>
				</a>
			)
		}
		return(
			<div className = 'container'>
				<div className = 'kong'>
				</div>
				<div id = 'container'>
					<div id = 'content'>
						<div id = 'kind'>
							<ul id = 'asidelist'>
								{kindprotitarr}
							</ul>
							<div className = 'mainlist'>
								<div className = 'mainlisttop'>
									{kindproarr}
								</div>
								<div className = 'mainlistbottom'>
									<div className = 'kindprolistmoretit'>
										{kindprolistmoretitarr}
									</div>
									<div className = 'kindprolistmoreBox'>
										{kindprolistmorearr}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	componentDidUpdate(){
		var that = this;
		console.log(2321412412);
		if(that.state.flag == false){
			$('.kindprolistmoretitname').on('tap',function(){
				$(this).css('color','hotpink').siblings().css('color','#000');
				console.log(this.id)
				$('.kindprolistmoretitname ')
				var url1 = 'https://list.mogujie.com/search?cKey=h5-cube&fcid=10062603&page=1&_version=1&pid=&q=&cpc_offset=0&sort='+this.id+'&_=1502180455627&callback=?'
				var obj1 = {
					data:'',
					url:url1,
					dataType:'JSONP'
				}
				MyAjax.zeptoAjax(obj1,function(data){
					that.setState({
						kindprolistmore : data.result.wall.docs
					})
				})
			});	
		}
		$('.prolist').on('tap',function(){
			var his = this;
			$(this).css('background','#fff').find('p').css({'border-left':'3px solid hotpink','color':'hotpink'}).parent().siblings().css('background','#eee').find('p').css({'border':'0','color':'#000'});
			console.log(this.id);
			var url0  = "http://mce.mogujie.com/jsonp/makeup/3?pid="+this.id+"&callback=?"
			var obj0 = {
			dataType : 'JSONP',
			url : url0
			}
			MyAjax.zeptoAjax(obj0,function(data){
				that.setState({
					kindprolist : data.data.categoryNavigation.list,
				})
			});
			console.log(this.value)
			var url1 = 'https://list.mogujie.com/search?cKey=h5-cube&fcid='+this.value+'&page=1&_version=1&pid=&q=&_=1502180455627&callback=?'
			var obj1 = {
				data:'',
				url:url1,
				dataType:'JSONP'
			}
			MyAjax.zeptoAjax(obj1,function(data){
				that.setState({
					kindprolistmore : data.result.wall.docs
				})
			});
			$('.kindprolistmoretitname').on('tap',function(){
				console.log(his.value)
				$(this).css('color','hotpink').siblings().css('color','#000');
				console.log(this.id)
				var url1 = 'https://list.mogujie.com/search?cKey=h5-cube&fcid='+his.value+'&page=1&_version=1&pid=&q=&cpc_offset=0&sort='+this.id+'&_=1502180455627&callback=?'
				var obj1 = {
					data:'',
					url:url1,
					dataType:'JSONP'
				}
				MyAjax.zeptoAjax(obj1,function(data){
					that.setState({
						kindprolistmore : data.result.wall.docs
					})
				})
			})
			that.setState({
				flag : true
			})
		})
	}
}