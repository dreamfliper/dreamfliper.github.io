import React, { Component } from 'react';
import RenderPropsTest from './RenderPropsTest'

export default class InheritProp extends Component {
	state={
		gotdata:this.props.passdown,
		value:''
	}

	componentWillReceiveProps(nextProps) {
		if ( nextProps!==this.props ) {
			this.setState({
				gotdata:nextProps.passdown
			});
		}	
	}

	handleChange = (e) => {
		this.setState({value:e.target.value.replace(/\D/g,'')});
	}

	render() {
		const reg = /[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
		const str = '中文www.google.com也是沒問題中文www.googleeee.com也是沒問題'
		const matched = str.match(reg)

		return (
			<div>
				{ this.state.gotdata }
				 <input type="text" value={this.state.value} onChange={this.handleChange} />
				{
					str.split(reg).map(phrase => (
						phrase === '' 
						? <a href={matched[0]}>{matched.shift()}</a>
						: phrase
					))
				}
				<RenderPropsTest name='renderprops' >
					{props=><p>{`${props.message} ${props.name}`}</p>}
				</RenderPropsTest>
			</div>
		);
	}
}
