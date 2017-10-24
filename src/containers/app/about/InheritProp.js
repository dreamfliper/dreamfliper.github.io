import React, { Component } from 'react';

export default class InheritProp extends Component {
	state={
		gotdata:this.props.passdown
	}

	componentWillReceiveProps(nextProps) {
		if ( nextProps!==this.props ) {
			this.setState({
				gotdata:nextProps.passdown
			});
		}	
	}

	render() {
		return (
			<div>
				{this.state.gotdata}
			</div>
		);
	}
}
