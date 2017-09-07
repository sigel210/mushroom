
import React from "react";
import {Link, hashHistory} from "react-router";

import "./../scss/proList.scss";

import MyAjax from "./MyAjax.js";

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			proList : []
		}
	}
	
	componentWillMount(){
		var that = this;
		var url = "http://datainfo.duapp.com/shopdata/getGoods.php";
		MyAjax.fetchJsonp(url,function(data){
			console.log(data)
			that.setState({
				proList : data
			})
		},function(err){
			console.log(err)
		})
	}
	
	toDetail(goodsID){
		console.log(goodsID);
		
		hashHistory.push({
			pathname:"/detail",
			query:{
				goodsID:goodsID
			}
		})
		
	}
	
	render(){
		var that = this;
		var data = this.state.proList;
		var arr = [];
		for(var i in data){
			arr.push(<li key={i} onClick = {that.toDetail.bind(that,data[i].goodsID)}>
						<div className="proImg">
							<img src={data[i].goodsListImg}/>
						</div>
						<div className="proInfo">
							<p className="proTitle">
								{data[i].goodsName}
							</p>
							<p className="proPrice">
								￥ {data[i].price}
							</p>
							<p className="proDiscount">
								{data[i].discount}折
							</p>
							<button>加入购物车</button>
						</div>
					</li>)
		}
		return (
			<div className = "type">
				<header id="header">home头部</header>
				<div id="content">
					{/*<Link to = "/detail" >详情</Link>*/}
					
					<ul id="proList">
						{arr}					
						{/*<li>
							<div className="proImg">
								<img src="../image/pic01.jpg"/>
							</div>
							<div className="proInfo">
								<p className="proTitle">
									商品名称商品名称商品名称商品名称商品名称
								</p>
								<p className="proPrice">
									￥ 12
								</p>
								<p className="proDiscount">
									6折
								</p>
								<button>加入购物车</button>
							</div>
						</li>
						<li>
							<div className="proImg">
								<img src="../image/pic01.jpg"/>
							</div>
							<div className="proInfo">
								<p className="proTitle">
									商品名称商品名称商品名称商品名称商品名称
								</p>
								<p className="proPrice">
									￥ 12
								</p>
								<p className="proDiscount">
									6折
								</p>
								<button>加入购物车</button>
							</div>
						</li>*/}
					</ul>
				</div>
			</div>
		)
	}
}
