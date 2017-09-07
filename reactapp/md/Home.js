import React from 'react';
import ReactDOM from 'react-dom';


import MyAjax from './MyAjax.js';


import './../scss/home.scss';



export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bannerlist : [],
			salelist : [],
			timetitpro : [],
			flag : false,
			timeprolist : [],
			prodiscoutlist : [],
			hotprolist : [],
			loveprolist : [],
			timer : []
		}
	}
	
	componentWillMount(){
		var that = this;
		var url = 'http://mce.mogucdn.com/jsonp/multiget/3?pids=51822%2C51827%2C41119%2C51833%2C51836%2C4604&callback=?';
		
		var obj = {
			type:"get",
			url:url,
			dataType:'JSONP',
			data:''
		}
		MyAjax.zeptoAjax(obj,function(data){
			console.log(data);
			console.log(data.data[51822].list);
			that.setState({
				bannerlist:data.data[51822].list,
				salelist:data.data[51827].list,
				timeprolist : data.data[41119].list[0].list,
				prodiscoutlist :　 data.data[51833].list,
				hotprolist :  data.data[51836].list,
			})
		});
		setInterval(function(){
			MyAjax.zeptoAjax(obj,function(data){
			that.setState({
				timetitpro:data.data[41119].list
			})
		});
		},1000);
		
		var page = 1;
		console.log($(document).height())
		var url1 = 'https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page='+page+'&_version=61&_=1501932777358&callback=?'
		var obj0 = {
			type:'get',
			dataType : 'JSONP',
			url : url1,
			data : ''
		}
		MyAjax.zeptoAjax(obj0,function(data){
			console.log(data);
			that.setState({
				loveprolist :　data.result.wall
			})
		})
	}
	render(){
		var that =this;
		var bannerdata = that.state.bannerlist;
		var bannerarr = [];
		
		for(var i in bannerdata){
			bannerarr.push(
				<div key = {i} className="swiper-slide">
					<a href = {bannerdata[i].link}>
						<img src = {bannerdata[i].image_800} />
					</a>
				</div>
			)
		}
		
		var saledata = that.state.salelist;
		var salearr = [];
		console.log(saledata);
		
		for(var j in saledata){
			salearr.push(
				<a className = 'saleLink' key = {j} href = {saledata[j].link}>
					<div className = 'salelist'>
						<h2 style = {{color:saledata[j].titleColor}}>{saledata[j].title}</h2>
						<p>{saledata[j].description}</p>
						<img src = {saledata[j].image} />
					</div>
				</a>
			)
		}
		
		var timetitprodata = that.state.timetitpro;
		var timetitarr = [];
		
		
		for(var k in timetitprodata){
			var time = timetitprodata[k].time;
			var h = parseInt(time/3600);
			var m = parseInt(time % 3600 / 60);
			var s = parseInt(time % 3600 % 60);
			if(h<10){
				h = "0" + h ;
			};
			if(m<10){
				m = '0' + m ;
			};
			if(s<10){
				s = '0' + s ;
			}
			console.log(h,m,s)
			timetitarr.push(
				<div key = {k} className = 'tit'>
					<p id = 'title'>{timetitprodata[k].title} ·</p>
					<p id = 'viceTitle'>{timetitprodata[k].viceTitle}</p>
					<p id = 'time'>
						<span id = 'h'>{h}</span>:
						<span id = 'm'>{m}</span>:
						<span id = 's'>{s}</span>
					</p>
					<a href = {timetitprodata[k].moreLink} id = 'moreTitle'>{timetitprodata[k].moreTitle}</a>
				</div>	
			)
		}
		
		var timeprolistdata = that.state.timeprolist;
		var timeprolistarr = [];
		
		
		for( var l in timeprolistdata){
			timeprolistarr.push(
				<div key = {l} className = 'timepro'>
					<a href = {timeprolistdata[l].listUrl}>
						<img className = 'timeproimg' src = {timeprolistdata[l].img}/>
						<p className = 'timeprotit'>{timeprolistdata[l].title}</p>
						<div className = 'price'>
							<p className = 'xianjia'>￥{timeprolistdata[l].salePrice}</p>
							<p className = 'yuanjia'>￥{timeprolistdata[l].price}</p>
						</div>
					</a>
				</div>
			)
		}
		
		var prodiscoutdata = that.state.prodiscoutlist;
		var prodiscoutdatatarr = [];
		
		
		for(var x in prodiscoutdata){
			prodiscoutdatatarr.push(
				<div key = {x} className = 'discoutpro'>
					<a href = {prodiscoutdata[x].link}>
						<div className = 'discoutprotitleBox'>
							<p className = 'discoutprotitle'>
								{prodiscoutdata[x].title}
							</p>
							<p className = 'describtion'>
								{prodiscoutdata[x].viceTitle}
							</p>
						</div>
						<img className = 'discoutproimg' src = {prodiscoutdata[x].image}/>
					</a>
				</div>
			)
		}
		
		var hotprodata = that.state.hotprolist;
		var hotproarr = [];
		
		
		for(var y in hotprodata){
			hotproarr.push(
				<div key = {y} className = 'hotpro'>
					<a className = 'hotproLink' href = {hotprodata.listUrl} >
						<img className = 'hotproimg' src = {hotprodata[y].image} />
						<p className = 'hotproname'>{hotprodata[y].title}</p>
					</a>
				</div>
			)
		}
		
		var loveprodata = that.state.loveprolist;
		var loveprotitarr = [];
		var loveprolist = [];
		
		var loveprolistspan = [];
		console.log(loveprodata);
			loveprotitarr.push(
				<div id = 'guesslovetit'>
					—— ·{loveprodata.title}· ——
				</div> 
			) 
			var data = loveprodata.docs;
			for(let i in data){
				loveprolist.push(
					<div key = {i} className = 'loveprolistBox'>
						<a href = {data[i].link}>
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
			<div className = 'container'>
				<div id="content">
					<div className="swiper-container">
					    <div className="swiper-wrapper">
					       {bannerarr}
					    </div>
					    <div className="swiper-pagination"></div>
					</div>
					<div className = 'prosalelist'>
						{salearr}
					</div>
					<div id = 'timepro'>
						{timetitarr}
						<div className = 'timeprolist'>
							{timeprolistarr}
						</div>
					</div>
					<div id = 'prodiscoutlistBox'>
						<div className = 'prodiscoutlisttit'>
							超实惠·促销直达
						</div>
						<div className = 'prodiscoutlist'>
							{prodiscoutdatatarr}
						</div>
					</div>
					<div id = 'hot'>
						<div id = 'hottit'>—— · 热门市场 · ——</div>
						<div id = 'hotlistBox'>
							{hotproarr}
						</div>
					</div>
					<div id = 'guesslove'>
						{loveprotitarr}
						{loveprolist}
					</div>
						
				</div>
			</div>
		)
	}
	componentDidUpdate(){
		var that = this;
		console.log(that.state.flag)
		$('#header').css({display:"flex",position:'relative'});
		$('#footer').show();
		$('.bu').show();
		if(that.state.flag == false){
			console.log(123213);
			console.log($('.swiper-container'));
			var myswiper = new Swiper('.swiper-container',{
				loop:true,
				pagination: '.swiper-pagination',
				autoplay:2000
			})
		}
		that.state.flag = true;
	}
}