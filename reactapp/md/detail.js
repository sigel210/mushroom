import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'

import MyAjax from './MyAjax.js';

import '../scss/detail.scss';

export default class Detail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			banner : [],
			normalShareInfo : [],
			
			highNowPrice : [],
			NowPrice : [],
			currency : [],
			priceSplit : [],
			
			store : [],
			
			renzheng : [],
			yunfei : [],
			tuihuo : [],
			promise : [],
			
			prosize : [],
			prosizemsg : [],
			
			
			commentnum : [],
			salenum : [],
			commenttags : [],
			commentlist :　[],
			
			shopLogo : [],
			shopname : [],
			star : [],
			shopsale : [],
			shopping : [],
			shoplink : [],
			
			introduce : [],
			detailImg : [],
			
			arr : []
		}
	}
	tomengban1(){
		console.log(111);
		$('.mengban1').show()
	}
	tomengban0(){
		console.log(111);
		$('.mengban0').show()
	}
	tohide(){
		$('.mengban').hide()
	}
	tocart(){
			var that = this;
			
			localStorage.getItem('cartlist');
			
			if(isNaN(parseInt($('.numipt').val()))){
				Toast.Toast.makeText('请输入正确数量',2000)
			}else{
				var num = parseInt($('.numipt').val());
			}
			var proname = $('.normalShareInfotit').html();
			if($('.guigeprice').css('display') == 'block'){
				console.log($('.guigeprice').html());
				var price = $('.guigeprice span').html()
			}
			var color = $('.lable').eq(0).find($('.spanbox .actives')).html();
			var size = $('.lable').eq(1).find($('.spanbox .actives')).html();
			var img = $('.guigeimg').eq(0)[0].currentSrc;
			
			var obj = {
				price :price,
				proname : proname,
				color : color,
				size : size,
				img : img,
				num : num
			}
			var arr = [];
			var flag = false;
			
			
			if(localStorage.getItem('cartlist')){
				arr = JSON.parse(localStorage.getItem('cartlist'));
				/*做判断是否为同一商品*/
				console.log(JSON.stringify(obj));
				for(var i in arr){
					
					var numobj = JSON.stringify(obj).length
					var numarr = JSON.stringify(arr[i]).length
					if(JSON.stringify(obj).substring(0,numobj-7) == JSON.stringify(arr[i]).substring(0,numarr-7)){
						arr[i].num = arr[i].num + obj.num;
						console.log(arr[i].num);
						flag = true;
					}
				}
				console.log(flag)
				/*不为同一件商品时做出商品添加*/
				if(flag == false){
					arr.push(obj);
				}
			}else{
				/*第一次向购物车添加商品*/
			    arr = that.state.arr;
			    arr.push(obj)
			}
			
			console.log(arr);
			var arrstr = JSON.stringify(arr);
			localStorage.setItem('cartlist',arrstr);
			hashHistory.push('/cart')
	}
	componentWillMount(){
		var that = this;
		var pid = localStorage.getItem('proid');
		console.log(pid);
		
		
		var url = 'http://m.mogujie.com/jsonp/detail.api/v1?iid='+pid+'&template=1-2-detail_normal-1.0.0&appPlat=&callback=?'
		var obj = {
			url:url,
			dataType : 'JSONP'
		}
		MyAjax.zeptoAjax(obj,function(data){
			console.log(data);
			that.setState({ 
				banner : data.data.topImages,
				normalShareInfo : data.data.normalShareInfo,
				
				highNowPrice :  data.data.normalPrice
.highNowPrice,
				NowPrice : data.data.normalPrice
.nowPrice,
				currency : data.data.normalPrice.currency,
				priceSplit : data.data.normalPrice.priceSplit,
				
				store : data.data.itemServices.columns,
				
				renzheng : data.data.itemServices.services[0].name,
				yunfei : data.data.itemServices.services[1].name,
				tuihuo : data.data.itemServices.services[2].name,
				promise : data.data.itemServices.services,
				
				prosizemsg :data.data.skuInfo,
				prosize : data.data.skuInfo.sizeKey,
				
				commentnum : data.data.rateInfo.cRate,
				salenum : data.data.rateInfo.sales,
				commenttags : data.data.rateInfo.rateTags,
				commentlist : data.data.rateInfo.list,
				
				shopLogo : data.data.shopInfo.shopLogo,
				shopname : data.data.shopInfo.name,
				star : data.data.shopInfo.level,
				shopsale : data.data.shopInfo.cSells,
				shopping : data.data.shopInfo.score,
				shoplink : data.data.shopInfo.shopUrl,
				
				introduce : data.data.detailInfo.desc,
				detailImg : data.data.detailInfo.detailImage
			}) 
		})
	}
	componentDidMount(){
		var canshu  = document.getElementsByClassName("procanshutit")[0];
		window.onscroll = function(){
			var t = document.documentElement.scrollTop || document.body.scrollTop;
			if(t>1100){
				canshu.style.position = 'fixed';
				canshu.style.top = '0';
			}else{
				canshu.style.position = 'relative';
			}
		}
		
	}
	render(){
		/*轮播图*/
		var that = this;
		var bannerarr = [];
		var bannerdata = that.state.banner; 
		for(var i in bannerdata){
			bannerarr.push(
				<div key = {i} className="swiper-slide">
					<img className = 'bannerimg' key = {i} src = {bannerdata[i]} />
				</div>
			)
		}
		/*商品名称*/
		var normalShareInfoarr = [];
		var normalShareInfo = that.state.normalShareInfo;
		normalShareInfoarr.push(
			<p className = 'normalShareInfotit'>
				{normalShareInfo.title}
			</p>
		)
		/*商品价格*/
		var currency = that.state.currency;
		var priceSplit = that.state.priceSplit;
		var highNowPrice = that.state.highNowPrice;
		var NowPrice = that.state.NowPrice;
		
		/*商品快递和价格*/
		var store = that.state.store;
		var storearr = []
		for(var k in store){
			storearr.push(
				<span key = {k}>{store[k].desc}</span>
			)
		}
		/*商品承诺*/
		var renzheng = that.state.renzheng;
		var yunfei = that.state.yunfei;
		var tuihuo = that.state.tuihuo;
		var promisearr = [];
		var promise = that.state.promise;
		
		for(var j in promise){
			if(promise[j].content){
				console.log(promise[j].content)
			}
			
			promisearr.push(
				<li key = {j} className = 'promiseli'>
					{
						(function(){
							var promisecontenticon = [];
							var promisecontentdata = that.state.promise;
								if(promisecontentdata[j].icon){
									promisecontenticon.push(
										<img src = {promisecontentdata[j].icon} />
									)
								}
							return(promisecontenticon)
						})()
					}
					<div className = 'promisright'>
						{promise[j].name}
						{
							(function(){
								var promisecontent = [];
								var promisecontentdata = that.state.promise;
									if(promisecontentdata[j].content){
										console.log(promisecontentdata[j].content)
										promisecontent.push(
											<p>
												{promisecontentdata[j].content}
											</p>
										)
									}
								return(promisecontent)
							})()
						}
					</div>
				</li>
			)
		}
		/*商品尺码*/
		var prosize = that.state.prosize;
		var prosizemsg = that.state.prosizemsg;
		var props = prosizemsg.props;
		var kucunzong = prosizemsg.totalStock;
		var lable = [];
		var guigeimg = [];
		var guigeprice = [];
		var guigekucun = [];
		for(var s in prosizemsg.skus){
			guigeimg.push(
				<img className = 'guigeimg' src = {prosizemsg.skus[s].img} />
			)
			guigeprice.push(
				<div className = 'guigeprice'>
					￥<span>{prosizemsg.skus[s].nowprice/100}</span>
				</div>
			)
			guigekucun.push(
				<span className = 'guigekucun'>
					{prosizemsg.skus[s].stock}
				</span>
			)
		}
		
		
		for(var o in prosizemsg.props){
			lable.push(
				<div key = {o} className = 'lable'>
					<div className = 'labletit'>
						{prosizemsg.props[o].label}
					</div>
					<div className = 'spanbox'>
						{
							(function(){
								var lablecontent = []
								for(var p in prosizemsg.props[o].list){
									lablecontent.push(
										<p key = {p} className = 'lablecontent'>
											{prosizemsg.props[o].list[p].name}
										</p>
									)
								}
								return(lablecontent)
							})()
						}
					</div>
				</div>
			)
		}
		
		
		/*商品评价*/
		var commentnum = that.state.commentnum;
		var salenum = that.state.commentnum;
		var commenttags = that.state.commenttags;
		var commenttagsarr = [];
		for(var item in commenttags){
			commenttagsarr.push(
				<div key ={item} className = 'tags'>
					<span>{commenttags[item].value}</span>
					<span>{commenttags[item].num}</span>
				</div>
			)
		}
		
		var commentlist = that.state.commentlist;
		var commentlistarr = [];
		for(var itemlist in commentlist){
			var usermsgname = commentlist[itemlist].user.uname;
			var usermsgimg = commentlist[itemlist].user.avatar;
			commentlistarr.push(
				<div className ='user'>
					<div className = 'usermsg'>
						<div className = 'imgBox'>
							<img className = 'usermsgimg' src = {usermsgimg} />
						</div>
						<span>{usermsgname}</span>
					</div>
					{commentlist[itemlist].content}
					{(function(){
						var isok = [];
						for(var x in commentlist[itemlist].extraInfo){
							console.log(commentlist[itemlist].extraInfo[x])
							isok.push(
								<p key ={x} className = 'ok'>
									{commentlist[itemlist].extraInfo[x]}
								</p>
							)
						}
						return(isok);
					})()}
				</div>
			)
		}
		/*商品店铺*/
		var shopLogo = that.state.shopLogo;
		var shopname = that.state.shopname;
		var star = that.state.star;
		var shoplink = that.state.shoplink;
		var stararr = [];
		for(var m = 0; m < star; m++){
			stararr.push(
				<b key ={m} className = 'iconfont start'>&#xe607;</b>
			)
		}
		
		var shopsale = that.state.shopsale;
		var shopping = that.state.shopping;
		var shoppingarr = [];
		for(var n in shopping){
			shoppingarr.push(
				<div key = {n} className = 'ping'>
					<span>{shopping[n].name}</span>
					<span className = 'score'>{shopping[n].score}</span>
				</div>
			)
		}
		var shoplink = that.state.shoplink;
		
		/*图文详情*/
		var introduce = that.state.introduce;
		var detailImg = that.state.detailImg;
		var detailImgarr =[];
		for(var q in detailImg){
			detailImgarr.push(
				<div className = 'detailImg'>
					<div className = 'detailImgtit'>
						{detailImg[q].key}
					</div>
					<div className = 'detaildesc'>
						{detailImg[q].desc}
					</div>
					<div className = 'detailimg'>
						{(function(){
							var detailimg = [];
							for(var img in detailImg[q].list){
								detailimg.push(
									<img key ={img} className = 'detailimg' src = {detailImg[q].list[img]} />
								)
							}
							return(
								<div>
									{detailimg}
								</div>
								)
						})()}
					</div>
				</div>
			)
		}
		
		return(
			<div className = 'container'>
				<div className = 'detailcontainer'>
					<div className = 'detailtop'>
						<div className="swiper-container">
						    <div className="swiper-wrapper">
						       {bannerarr}
						    </div>
						    <div className="swiper-pagination"></div>
						</div>
						<div className = 'detailtopmsg'>
							{normalShareInfoarr}
						</div>
					</div>
					<div className = 'detailcontent'>
						<div className = 'proprice'>
							{currency}{NowPrice}{priceSplit}{currency}{highNowPrice}
						</div>
						<div className = 'storeaddress'>
							{storearr}
						</div>
						<div className = 'beforepromise' onClick = {this.tomengban1.bind(this)}>
							<span><b className = 'iconfont'>&#xe646;</b>{renzheng}</span>
							<span><b className = 'iconfont'>&#xe692;</b>{yunfei}</span>
							<span><b className = 'iconfont'>&#xe74b;</b>{tuihuo}</span>
							<b className = 'iconfont show' >&#xe610;</b>
						</div>
						<div className = 'choose' onClick = {this.tomengban0.bind(this)}>
							<p>请选择:{prosize}<b className = 'iconfont'>&#xe610;</b></p>
						</div>
						<div className = 'comment'>
							<div className = 'commenttit'>
								<span>买家评价:{commentnum}</span>
								<span className = 'salenum'>销量:{salenum}</span>
								<b className = 'iconfont'>&#xe610;</b>
							</div>
							<div className = 'commenttags'>
								{commenttagsarr}
							</div>
							<div className = 'commentlist'>
								{commentlistarr}
							</div>
						</div>
						<div className = 'storemsg'>
							<div className = 'storetop'>
								<img className = 'storelogo' src = {shopLogo} />
								<div className = 'shopname'>
									<div>{shopname}</div>
									<div>{stararr}</div>
								</div>
								<a href = {shoplink} className = 'tostore'>
									进店
									<b className = 'iconfont'>&#xe610;</b>
								</a>
							</div>
							<ul className = 'storebottom'>
								<li>
									<dt>{shopsale}</dt>
									<dd>总销量</dd>
								</li>
								<li>
									<dt>{shopsale}</dt>
									<dd>收藏数</dd>
								</li>
								<li>
									<div className = 'ping'>
										{shoppingarr}
									</div>
								</li>
							</ul>
						</div>
						<ul className = 'procanshutit'>
							<li className = 'canshu'>图文详情</li>
							<li className = 'canshu'>商品参数</li>
							<li className = 'canshu'>热卖推荐</li>
						</ul>
						 <div className = 'picdetail'>
						 	<div className = 'linetop'>
						 		<i className = 'lineup'></i>
						 	</div>
						 	<div className = 'word'>
								{introduce}
							</div>
							<div className = 'linebottom'>
								<i className = 'linedown'></i>
						 	</div>
						 	<div className = 'chuan'>
						 		{detailImgarr}
						 	</div>
						</div>
					</div>
					<div className = 'mengban mengban1'>
						<ul className = 'promise ani fadeInUp animated'>
							<div className = 'title'>服务说明</div>
							<b className = 'iconfont' onClick = {this.tohide.bind(this)}>&#xe689;</b>
							{promisearr}
						</ul>
					</div>
					<div className = 'mengban mengban0'>
						<ul className = 'lableBox ani fadeInUp animated'>
						<b className = 'iconfont' onClick = {this.tohide.bind(this)}>&#xe689;</b>
							<div className = 'guigetit'>
								<div className = 'guigepic'>
									{guigeimg}
								</div>
								<div className = 'guige'>
									<div className = 'price'>
										{guigeprice}
									</div>
									<div className = 'kucun'>
										库存:
										<span className = 'kucunzong'>{kucunzong}</span>
										{guigekucun}
									</div>
									<div className = 'please'>
										请选择:颜色 尺码
									</div>
								</div>
							</div>
							{lable}
							<div className = 'num'>
								<span className = 'jian'>-</span>
								<input className = 'numipt' type = 'text' value = "1"/>
								<span className = 'jia'>+</span>
							</div>
							<div className = 'bottom'>
								<div className = 'tocart' onClick = {this.tocart.bind(this)}>加入购物车</div>
								<div className = 'jiesuan'>结算</div>
							</div>
						</ul>
					</div>
					<div id = 'detailfooter'>
						<ul className = 'detailfooterleft'>
							<li><b className = 'iconfont'>&#xe62d;</b>客服</li>
							<li><b className = 'iconfont'>&#xe60f;</b>收藏</li>
							<li><b className = 'iconfont'>&#xe74b;</b>小店</li>
						</ul>
						<ul className = 'detailfooterright'>
							<li onClick = {this.tomengban0.bind(this)}>加入购物车</li>
							<li>立即购买</li>
						</ul>
					</div>
				</div>
			</div>
			
		)
	}
	componentDidUpdate(){
		var that = this;
		console.log(111);
			var myswiper = new Swiper('.swiper-container',{
			loop:true,
		    pagination: '.swiper-pagination' 
		})
			
		$('.guigeimg').eq(0).show();
		$('.guigeprice').eq(0).show();
		$('.lable').eq(1).find($('.lablecontent')).on('tap',function(){
			var index = $(this).index();
			$(".kucunzong").hide();
			$('.guigekucun').eq(index).show().siblings().hide();
			$(this).addClass('actives').siblings().removeClass('actives');
		})
		$('.lablecontent').on('tap',function(){
			$(this).addClass('actives').siblings().removeClass('actives');
		})
		$('.jian').on('tap',function(){
			console.log(11);
			$('.numipt').val(parseInt($('.numipt').val())-1);
		})
		$('.jia').on('tap',function(){
			$('.numipt').val(parseInt($('.numipt').val())+1);
		})
	}
}