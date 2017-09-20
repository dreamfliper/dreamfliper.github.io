import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateResume, fetchDropbox } from '../../../modules/counter'
import Markdown from 'react-markdown'
import { Row, Col, Button  } from 'antd'

class Resume extends Component {
	state = {
		langSelect:0,
		resumeLang:['Chinese', 'English']
	}

	handleClick = () =>{
		this.setState({langSelect:+!this.state.langSelect})
		this.props.fetchDropbox({path: !!this.state.langSelect ? '/Resume_eng.md':'/Resume.md'})
	}

	componentWillMount() {
		console.log(!!this.state.langSelect)
		this.props.fetchDropbox({path: '/Resume_eng.md'})
	}
	
	componentWillUnmount(){
	  this.props.updateResume('waiting for connection')
	}

	render() {
		return (
			<Row>
				<Col sm={{ span:21, offset:2 }} md={{ span:18, offset:3 }} lg={{ span:14, offset:5 }}>
					<Markdown  source={this.props.resumeSource} />
				</Col>
				<Col>
					<Button loading={this.props.isFetch} type="primary" onClick={()=>this.handleClick()} >{this.state.resumeLang[this.state.langSelect]}</Button>
				</Col>
			</Row>
		)
	}
}


const mapStateToProps = state => ({
	resumeSource: state.counter.resumeSource,
	isFetch: state.counter.isFetch,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateResume,
  fetchDropbox,
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Resume)
