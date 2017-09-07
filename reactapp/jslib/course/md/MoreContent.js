
import React from "react";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class MoreContent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: ['hello', 'world', 'click', 'me']
		};
	}
	handleAdd(){
		const newItems = this.state.items.concat([
	      prompt('Enter some text')
	    ]);
	    this.setState({items: newItems});
	}
	deleteItem(i){
		const newItems = this.state.items;
		newItems.splice(i,1);
		this.setState({items: newItems});
	}
	render(){
		var that = this;
		var data = this.state.items;
		var len = data.length;
		var arr = [];
		for(var i = 0; i < len; i++){
			arr.push(<div key={i} >
			        {data[i]} <button onClick={that.deleteItem.bind(that,i)}>删除</button>
			      </div>)
		}
		return (
			<div>
				<button onClick={this.handleAdd.bind(this)}>Add Item</button>
				<ReactCSSTransitionGroup
		          transitionName="example"
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={300}>
					{arr}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
	
//	componentDidMount(){
//		alert(prompt('Enter some text'))
//	}
}

export default MoreContent;