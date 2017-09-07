import React from 'react';
import {Link,hashHistory} from 'react-router';

import './../scss/search.scss';
import MyAjax from './MyAjax.js';

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hotsearch : [],
			hotspan : []
		}
	}
	componentWillMount(){
		var that = this;
		var url = 'http://list.mogujie.com/module/mget?code=sketch%2ChotWord&callback=?'
		var obj = {
			url : url,
			dataType : "JSONP",
			data : ''
		}
		MyAjax.zeptoAjax(obj,function(data){
			console.log(data);
			that.setState({
				hotsearch : data.data.sketch.data,
				hotspan : data.data.hotWord.data
			})
		})
		console.log(that.state.hotsearch);
	}

	render(){
		var that = this;
		var hotsearchdata = that.state.hotsearch;
		console.log(hotsearchdata);
		
		var iptarr = [];
		iptarr.push(
			<input className = 'searchipt' type = 'text' placeholder = {hotsearchdata.frontword} />
		)
		
		var hotspandata = that.state. hotspan;
		console.log(hotspandata);
		var hotspanarr = [];
		for(var y in hotspandata){
			hotspanarr.push(
				<span key = {y} style = {{ color:hotspandata[y].color}} className = 'searchspan'>{hotspandata[y].frontword}</span>
			)
		}
		return( 
			<div id = 'container'>
				<div id = 'searchheader'>
					<b className = 'iconfont back'>&#xe601;</b>
					{iptarr}
					<p className = 'searchword' onClick = {this.search.bind(this)}>搜索</p>
				</div>
				<div id = 'historysearch'>
					<h3 className = 'searchtit'><b className = 'iconfont'>&#xe66f;</b>历史搜索<b className = 'iconfont delete'>&#xe61c;</b></h3>
					<p id = 'historysearchcontent'>暂无搜索记录</p>
				</div>
				<div className = 'hotspan'>
					<h3 className = 'searchtit'><b className = 'iconfont'>&#xe602;</b>热门搜索</h3>
					{hotspanarr}
				</div>
			</div>
		)
	}
	search(){
		if($('.searchipt').val() !== ''){
			var val = $('.searchipt').val();
			localStorage.setItem('searchword',$('.searchipt').val());
			hashHistory.push('/searchpro')
		}
		if($('#historysearchcontent').html() == '暂无搜索记录'){
			$('#historysearchcontent').html('');
		}
		var $hisBox = $('<span class ="hisword">'+val+'</span>')
		$('#historysearchcontent').append($hisBox);
		
	}
	componentDidMount(){
		$('#header').css("display","none");
		$('#footer').css("display","none");
		$('.bu').hide();
		$('.back').on('tap',function(){
			 history.go(-1);
		})
		$('.delete').on('tap',function(){
			$('#historysearchcontent').html('');
			$('#historysearchcontent').html('暂无搜索记录');
		});
	}
	componentDidUpdate(){
		$('.searchspan').on('tap',function(){
			console.log(111);
			$('.searchipt').val($(this).html())
		});
	}
}
