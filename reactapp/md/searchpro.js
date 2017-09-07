import React from 'react';
import {Link,hashHistory} from 'react-router';

import './../scss/search.scss';
import './../scss/searchpro.scss';

import MyAjax from './MyAjax.js';

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchpro : [],
		}
	}
	componentWillMount(){
		var that = this;
		console.log(1111);
	}
	tosearch (){
		hashHistory.push('/search');
	}
	todetail(){
		hashHistory.push('/detail');
	}
	componentDidMount(){
			var that = this;
			$('#header').css("display","none");
			$('#footer').css("display","none");
			$('.back').on('tap',function(){
				 history.go(-1);
			})
			$('.searchipt').val(localStorage.getItem('searchword'));
			console.log($('.searchipt').val())
			var url = 'http://list.mogujie.com/search?_version=61&q='+$('.searchipt').val()+'&cKey=46&minPrice=&_mgjuuid=8a3be964-003a-47e8-8a50-53e9bb89c4f7&ppath=&page=1&maxPrice=&sort=pop&userId=17zjuly&cpc_offset=&priceList=&_=1502328443762&callback=?';
			var obj0 = {
				url : url,
				dataType : 'JSONP'
			}
			MyAjax.zeptoAjax(obj0,function(data){
				that.setState({
					searchpro : data.result.wall.docs
				})
			})
		}
	render(){
		var that = this;
		
		var iptarr = [];
		iptarr.push(
			<input className = 'searchipt' type = 'text' onClick = {this.tosearch.bind(this)}/>
		)
		var loveprolist = []
		var data = that.state.searchpro;
		console.log(data);
		for(let i in data){
			console.log(data[i].iid);
				loveprolist.push(
					<div id = {data[i].iid} key = {i} className = 'loveprolistBox' onClick = {this.todetail.bind(this)}>
						<a>
							<img className = 'loveprolistimg' src = {data[i].img} />
							<div className = 'spanBox'>
								{(function(){
									var loveprohotarr = [];
									var loveprohotdata = data[i].leftbottom_taglist 
										for(var a in loveprohotdata){
											loveprohotarr.push(
												<span key = {a} style = {{color:loveprohotdata[a].color,background:loveprohotdata[a].bgColor}}>{loveprohotdata[a].content}</span>
											)
										}
										return(loveprohotarr)
								})()}
								{(function(){
									var newarr=[] 
									for(var item in data[i].props){
										newarr.push(
											<span key = {item}> {data[i].props[item]}</span>
										)
									}
									return(newarr)
								})()}
							</div>
							<p className = 'loveprolisprice'>
								￥{data[i].price}
							</p>
						</a>
					</div>
				)
			}
		
		
		return( 
			<div id = 'container'>
				<div id = 'searchproheader'>
					<b className = 'iconfont back'>&#xe601;</b>
					{iptarr}
					<b className = 'iconfont'>&#xe63c;</b>
				</div>
				
				<div id = 'guesslove'>
					{loveprolist}
				</div>
			</div>
		)
	}
	componentDidUpdate(){
		var that = this;
		$('.loveprolistBox').on('tap',function(){
			localStorage.setItem('proid',this.id);
		})
	}
}

