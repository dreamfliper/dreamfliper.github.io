import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateResume, fetchDropbox } from '../../../modules/counter'
import Markdown from 'react-markdown'
import Spinner from 'react-spinkit'
import { Row, Col, Button  } from 'antd'

class Resume extends Component {
	state = {
		langSelect:0,
		resumeLang:['Chinese', 'English']
	}

	handleClick = () =>{
		this.setState(({langSelect})=>({langSelect:+!langSelect}))
		this.props.fetchDropbox({path: !!this.state.langSelect ? '/Resume_eng.md':'/Resume.md'})
	}

	componentWillMount() {
		this.props.fetchDropbox({path: '/Resume_eng.md'})
	}
	
	componentWillUnmount(){
	  this.props.updateResume('waiting for connection')
	}

	render() {
		let {resumeLang, langSelect} = this.state
		return (
			<Row>
				<Col sm={{ span:21, offset:2 }} md={{ span:18, offset:3 }} lg={{ span:14, offset:5 }}>
					{this.props.isFetching && <Spinner fadeIn='none' name="line-scale" color="steelblue" style={{position:'absolute',left:'50%',top:'50%'}}/>}
					<Markdown  source={this.props.resumeSource} />
				</Col>
				<Col>
					<Button loading={this.props.isFetching} type="primary" onClick={()=>this.handleClick()} >{resumeLang[langSelect]}</Button>
				</Col>
			</Row>
		)
	}
}


const mapStateToProps = state => ({
	resumeSource: state.counter.resumeSource,
	isFetching: state.counter.isFetching,
})

export default connect(
	mapStateToProps,
	{updateResume,fetchDropbox}
)(Resume)