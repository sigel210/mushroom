
import React from "react";

class RegisterContent extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div>
				注册{this.props.location.query.a}
			</div>
		)
	}
	
	componentWillMount(){
		console.log(this.props)
	}
}

export default RegisterContent;