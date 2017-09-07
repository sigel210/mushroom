
import React from "react";
import {Link,IndexLink} from "react-router";

import MyAjax from "./MyAjax.js";

export default class App extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props.location.query.goodsID)
		this.state = {
			goodsID : this.props.location.query.goodsID
		}
	}
	
	componentWillMount(){
		var url = "http://datainfo.duapp.com/shopdata/getGoods.php?goodsID="+this.state.goodsID;
		MyAjax.fetchJsonp(url,function(data){
			console.log(data)
			
		},function(err){
			console.log(err)
		})
	}
	
	render(){
		
		return (
			<div id="container">
				<div className = "type">
					<header id="header">detail头部</header>
					<div id="content">
						<div className="swiper-container" id="detailBox">
							<div className="swiper-wrapper">
								<div className="swiper-slide">实拍内容---{this.state.goodsID}</div>
								<div className="swiper-slide">评价内容</div>
								<div className="swiper-slide">详情内容</div>
							</div>
						</div>
					</div>
				</div>
				<footer id="footer">
					<ul>
						<li>
							<a href = "javascript:void(0)" >实拍</a>
						</li>
						<li>
							<a href = "javascript:void(0)" >评价</a>
						</li>
						<li>
							<a href = "javascript:void(0)" >详情</a>
						</li>
					</ul>
				</footer>
			</div>
		)
	}
	
	componentDidMount(){
		$("#footer").find("li").eq(0).find("a").addClass("active")
		var mySwiper = new Swiper("#detailBox",{
			onSlideChangeEnd:function(swiper){
				var index = swiper.activeIndex;
				$("#footer").find("li").find("a").removeClass("active");
				$("#footer").find("li").eq(index).find("a").addClass("active")
			}
		})
		$("#footer").find("li").on("tap",function(){
			var index = $(this).index();
			mySwiper.slideTo(index,300)
		})
	}
}
