
import React from "react";

class KindHeader extends React.Component{
	constructor(props){
		super(props);
	}
	
	back(){
		window.history.go(-1);  //返回上一页
//		window.history.back();  //返回上一页
	}
	
	render(){
		return (
			<div>
				详情头部
				<button onClick={this.back.bind(this)}>返回</button>
			</div>
		)
	}
}

export default KindHeader;