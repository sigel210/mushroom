
import React from "react";

class KindContent extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div>
				详情----{this.props.location.query.a}
			</div>
		)
	}
}

export default KindContent;