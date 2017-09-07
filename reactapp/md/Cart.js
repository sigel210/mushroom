import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'

import './../scss/cart.scss';

export default class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			cartlist : [],
			count : 0,
			countprice : 0,
			procountnum : 0
		}
	}
	tobuy(){
		hashHistory.push('/search');
	}
	componentWillMount(){
		var that = this;
		var msg = JSON.parse(localStorage.getItem('cartlist'));
		console.log(msg)
		that.setState({
			cartlist : msg
		})
		$('#container .bu').hide()
	}
	componentDidMount(){
		var that = this;
		$('#header').css("display","none");
		$('#footer').css("display","none");
		$('.bu').hide();
		$('.back').on('tap',function(){
			 history.go(-1);
		});
		if($('.cartprolist').html() == ''){
			$('.cartprolist').hide()
		}else{
			$('.nopro').hide()
		}
		var countnum = 0;
		var num = 0;
		var countprice = 0;
		var price = 0.00;
		console.log(JSON.parse(localStorage.getItem('cartlist')))
		$('.checked').on('tap',function(){
			/*获取checkd索引值，得到数组第index个对象的数值*/
			var index = $('.checked').index(this);
			num = that.state.cartlist[index].num;
			price = parseFloat(that.state.cartlist[index].price) ;
			if($(this).hasClass('show')){
				/*商品选中按钮*/
				$(this).addClass('hide').removeClass('show');
				countnum -= num;
				countprice -= price*num;
			}else if($(this).hasClass('hide')){
				$(this).addClass('show').removeClass('hide');
				countnum += num;
				countprice += price*num;
			}
			that.setState({
				count : countnum,
				countprice :countprice
			})
		})
		$('.quan').on('tap',function(){
			if($(this).hasClass('show')){
				/*全选选中按钮*/
				$(this).addClass('hide').removeClass('show');
				$('.checked').addClass('hide').removeClass('show');
				num = 0;
				price = 0.00;
			}else if($(this).hasClass('hide')){
				$(this).addClass('show').removeClass('hide');
				num = 0;
				price = 0;
				for(var i in that.state.cartlist){
					num += that.state.cartlist[i].num;
					price += that.state.cartlist[i].num * parseFloat(that.state.cartlist[i].price)
				}
				$('.checked').addClass('show').removeClass('hide')
			}
			countnum = num;
			countprice = price;
			that.setState({
				count : countnum,
				countprice :countprice
			})
		})
		$('.edit').on('tap',function(){
			var num = that.state.procountnum;
			num++;
			that.setState({
				procountnum : num
			})
			console.log(parseInt($('.pronum').html()))
			if(num % 2 == 0){
				$('.edit').html('编辑');
				$('.num .controle').hide();
				$('.delete').hide()
			}else{
				$('.edit').html('完成');
				$('.num .controle').css('display','inline-block');
				$('.delete').show()
				
				var pro = JSON.parse(localStorage.getItem('cartlist'));
				$('.delete').on('tap',function(){
					var index = $('.delete').index(this);
					pro.splice(index,1);
					localStorage.setItem('cartlist',JSON.stringify(pro));
					var msg = JSON.parse(localStorage.getItem('cartlist'));
						console.log(msg)
						that.setState({
							cartlist : msg
						})
				})
				$('.jian').on('tap',function(){
					console.log(11);
					var pronum = parseInt($(this).next('.pronum').html());
					pronum--;
					$(this).next('.pronum').html(pronum)
					var index = $('.jian').index(this);
					pro[index].num = pronum;
					localStorage.setItem('cartlist',JSON.stringify(pro))
				});
				$('.jia').on('tap',function(){
					var pronum =  parseInt($(this).prev('.pronum').html());
					pronum++;
					console.log(pronum);
					$(this).prev('.pronum').html(pronum)
					var index = $('.jia').index(this);
					pro[index].num = pronum;
					localStorage.setItem('cartlist',JSON.stringify(pro))
				});
			}
			var msg = JSON.parse(localStorage.getItem('cartlist'));
			that.setState({
				cartlist : msg
			})
		})
	}
	toback(){
		history.go(-1);
	}
	render(){
		var that = this;
		var cartlistdata = that.state.cartlist;
		var cartlist  = [];
		var count = that.state.count;
		var countprice = that.state.countprice;
		for(var x in cartlistdata){
			cartlist.push(
				<div className = 'cartlist'>
					<b className = 'iconfont checked hide'>&#xe641;</b>
					<img className = 'cartproimg' src = {cartlistdata[x].img} />
					<div className = 'cartpromsg'>
						<div className = 'delete'>
							删除
						</div>
						<div className = 'cartproname'>{cartlistdata[x].proname}</div>
						<div className = 'cartproguige'>
							<div className = 'color'>
								颜色:{cartlistdata[x].color}
							</div>
							<div className = 'size'>
								尺寸:{cartlistdata[x].size}
							</div>
							<div className = 'num'>
								数量:<span className = 'jian controle'>-</span><span className = 'pronum'>{cartlistdata[x].num}</span><span className = 'jia controle'>+</span>
							</div>
						</div>
						<div className = 'cartproprice'>
							￥{cartlistdata[x].price}
						</div>
					</div>
				</div>
			)
		}
		return(
			<div id = 'container'>
				
					<header id="cartheader">
						<div id = 'Cartheader'>
							<b className = 'iconfont back' onClick = {this.toback.bind(this)}>&#xe601;</b>
							<div className = 'buycart'>购物车</div>
							<div className = 'edit'>编辑</div>
							<b className = 'iconfont'>&#xe60a;</b>
						</div>
					</header>
					
					<div id = 'Cartcontent'>
						<div className = 'nopro'>
							<div className = 'Cartlogo'>
								<b className = 'iconfont'>&#xe63c;</b>
							</div>
							<div className = 'kong'></div>
							<p className = 'noprotip'>购物车还是空的哦</p>
							<button className = 'cartbtn' onClick = {this.toback.bind(this)}>去购物</button>
						</div>
						<div className = 'cartprolist'>
							{cartlist}
						</div>
						
						<div className = 'jiesuan'>
							<div className = 'left'>
								<b className = 'iconfont hide quan'>&#xe641;</b>
								<div className = 'all'>全选</div>
								<div className = 'count'>({count})</div>
								<div className = 'money'>￥{countprice}</div>
							</div>
							<button className = 'tojiesun'>去结算</button>
						</div>
					</div>
			</div>
			
		)
	}
}